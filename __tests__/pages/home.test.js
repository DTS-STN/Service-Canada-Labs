/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import fetchMock from "fetch-mock";

describe("Homepage content", () => {
  beforeEach(() => {
    fetchMock.getOnce(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BACKEND_URL}/page-contents?populate=%2A&locale=all`,
      {
        status: 200,
        body: "Homepage content",
      }
    );
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it.skip("renders without crashing", async () => {
    const { render } = await getPage({
      route: "/home",
    });
    render();
    expect(screen.getAllByText("Service Cananda Labs")[0]).toBeInTheDocument();
  });
});
