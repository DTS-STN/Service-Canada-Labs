/**
 * @jest-environment jsdom
 */
import { getPage } from "next-page-tester";
import { screen } from "@testing-library/react";
import fetchMock from "fetch-mock";
const experiments = require("../../cypress/fixtures/experiments.json");

describe("Experiments", () => {
  beforeEach(() => {
    fetchMock.getOnce(`${process.env.STRAPI_API_BACKEND_URL}/experiments`, {
      status: 200,
      body: experiments,
    });
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it("renders without crashing", async () => {
    const { render } = await getPage({
      route: "/experiments",
    });
    render();
    expect(screen.getByText("Explore our projects")).toBeInTheDocument();
  });
});
