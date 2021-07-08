/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import UnsubscribeConfirmation from "../../pages/unsubscribe-confirmation";

describe("Unsubscribe confirmation", () => {
  it("renders without crashing", () => {
    render(<UnsubscribeConfirmation />);
    expect(
      screen.getByText("scLabsUnsubscribeConfirmation")
    ).toBeInTheDocument();
  });
});
