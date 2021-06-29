/**
 * @jest-environment jsdom
 */
 import { render, screen } from "@testing-library/react";
 import Privacy from "../../pages/privacy";
 
 describe("Home", () => {
   it("renders without crashing", () => {
     render(<Privacy />);
     expect(
       screen.getByText("privacyTitle")
     ).toBeInTheDocument();
   });
 });
 