/**
 * @jest-environment jsdom
 */
// import { getPage } from "next-page-tester";
import { screen } from "@testing-library/react";
import fetchMock from "fetch-mock";

const experiments = require("../../cypress/fixtures/experiments.json");
jest.mock("next/link", () => {
  return ({ children }) => {
    return children;
  };
});

describe("Projects", () => {
  beforeEach(() => {
    fetchMock.getOnce(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BACKEND_URL}/experiments`,
      {
        status: 200,
        body: experiments,
      }
    );
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it.skip("renders without crashing", async () => {
    const { render } = await getPage({
      route: "/projects",
    });
    render();
    expect(screen.getAllByText("Explore our projects")[0]).toBeInTheDocument();
  });
});
