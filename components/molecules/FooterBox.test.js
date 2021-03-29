import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Primary } from "./FooterBox.stories";

it("renders FooterBox in its primary state", () => {
  render(<Primary {...Primary.args} />);
  const socialMediaLink = screen.getByText(Primary.args.socialMediaText);
  const termsAndConditionsLink = screen.getByText(
    Primary.args.termsAndConditionsText
  );
  const privacyLink = screen.getByText(Primary.args.privacyText);

  const footerContent = screen.getByText(Primary.args.children);
  const image = screen.getByAltText(Primary.args.footerCanadaCaAltText);

  expect(socialMediaLink.getAttribute("href")).toBe(
    Primary.args.socialMediaLink
  );
  expect(termsAndConditionsLink.getAttribute("href")).toBe(
    Primary.args.termsAndConditionsLink
  );
  expect(privacyLink.getAttribute("href")).toBe(Primary.args.privacyLink);
});
