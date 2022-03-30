/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import VirtualAssitant from "../../pages/projects/virtual-assistant";

describe("Virtual Assitant Prototype page", () => {
  it("renders without crashing", () => {
    render(<VirtualAssitant />);
    expect(screen.getByText("virtualAssistantTitleStatic")).toBeInTheDocument();
  });
});
