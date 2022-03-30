/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import fetchMock from "fetch-mock";

describe("About", () => {
  beforeEach(() => {
    fetchMock.getOnce(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BACKEND_URL}/page-contents?populate=%2A&locale=all`,
      {
        status: 200,
        body: "page contents",
      }
    );
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it.skip("renders without crashing", async () => {
    const { render } = await getPage({
      route: "/about",
    });
    render();
    expect(screen.getAllByText("About these labs")[0]).toBeInTheDocument();
  });
});
