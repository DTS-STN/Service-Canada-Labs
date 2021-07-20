/**
 * @jest-environment jsdom
 */
import { getPage } from "next-page-tester";
import { screen } from "@testing-library/react";
import fetchMock from "fetch-mock";
const projects = require("../../cypress/fixtures/projects.json");

describe("Projects", () => {
  beforeEach(() => {
    //When the Backend endpoint changes to /projects, we will need to change it here as well.
    fetchMock.getOnce(`${process.env.STRAPI_API_BACKEND_URL}/experiments`, {
      status: 200,
      body: projects,
    });
  });
  afterEach(() => {
    fetchMock.restore();
  });
  it("renders without crashing", async () => {
    const { render } = await getPage({
      route: "/projects",
    });
    render();
    expect(screen.getByText("Explore our projects")).toBeInTheDocument();
  });
});
