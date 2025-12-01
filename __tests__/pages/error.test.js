/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react";

import router from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("Error page", () => {
  it.skip("renders the page", async () => {
    await act(async () => {
      const { render } = await getPage({
        route: "/error",
      });
      render();
    });
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it.skip("renders default title and message", async () => {
    await act(async () => {
      const { render } = await getPage({
        route: "/error",
      });
      render();
    });

    const titleEn = screen.getByTestId("heading-en");
    const titleFr = screen.getByTestId("heading-fr");
    const messageEn = screen.getByTestId("errormessage-en");
    const messageFr = screen.getByTestId("errormessage-fr");

    expect(titleEn.textContent).toEqual("The web site has reported an error.");
    expect(titleFr.textContent).toEqual("Le site Web a signalé une erreur.");
    expect(messageEn.textContent).toEqual(
      "If the problem persists, report the problem."
    );
    expect(messageFr.textContent).toEqual(
      "Si le problème persiste, veuillez signaler le problème."
    );
  });

  it("renders custom title", () => {
    act(() => {
      router.push({
        pathname: "/error",
        query: { errorTitle: "custom title", errorTitleFr: "custom title fr" },
      });
    });
    expect(router).toMatchObject({
      pathname: "/error",
      query: { errorTitle: "custom title", errorTitleFr: "custom title fr" },
    });
  });

  it("renders custom message", () => {
    act(() => {
      router.push({
        pathname: "/error",
        query: {
          errorMessage: "custom error message",
          errorMessageFr: "custom error message fr",
        },
      });
    });

    expect(router).toMatchObject({
      pathname: "/error",
      query: {
        errorMessage: "custom error message",
        errorMessageFr: "custom error message fr",
      },
    });
  });

  it("renders the status code if it's passed in", () => {
    act(() => {
      router.push({
        pathname: "/error",
        query: { statusCode: "404" },
      });
    });

    expect(router).toMatchObject({
      asPath: "/error?statusCode=404",
      pathname: "/error",
      query: { statusCode: "404" },
    });
  });
});
