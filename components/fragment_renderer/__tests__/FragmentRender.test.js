import { render, screen } from "@testing-library/react";
import FragmentRender from "../FragmentRender";

describe("FragmentRender", () => {
  // Mock console methods
  beforeEach(() => {
    jest.spyOn(console, "warn").mockImplementation(() => {});
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // Test Data
  const mockCTAFragment = {
    _model: { title: "SCLabs-Feature-v1" },
    scTitleEn: "Test Title",
    scTitleFr: "Titre Test",
    scContentEn: {
      json: [
        {
          nodeType: "header",
          style: "h1",
          content: [
            {
              nodeType: "text",
              value: "Benefits Navigator",
            },
          ],
        },
        {
          nodeType: "paragraph",
          content: [
            {
              nodeType: "text",
              value:
                "The Benefits Navigator is a tool mainly for professionals who help people with their government benefits.",
            },
          ],
        },
      ],
    },
    scContentFr: {
      json: [
        {
          nodeType: "header",
          style: "h1",
          content: [
            {
              nodeType: "text",
              value: "Navigateur des prestations",
            },
          ],
        },
        {
          nodeType: "paragraph",
          content: [
            {
              nodeType: "text",
              value:
                "Le Navigateur des prestations est un outil principalement destiné aux professionnels qui aident les gens avec leurs prestations gouvernementales.",
            },
          ],
        },
      ],
    },
    scLabsButton: [
      {
        scId: "btn-1",
        scTitleEn: "Click Here",
        scTitleFr: "Cliquez Ici",
        scDestinationURLEn: "/en/test",
        scDestinationURLFr: "/fr/test",
      },
    ],
  };

  const mockButtonFragment = {
    _model: { title: "SCLabs-Button-v1" },
    scId: "btn-2",
    scButtonType: ["primary"],
    scTitleEn: "Test Button",
    scTitleFr: "Bouton Test",
    scDestinationURLEn: "/en/button",
    scDestinationURLFr: "/fr/button",
  };

  describe("Basic Rendering", () => {
    it("renders nothing when fragments array is empty", () => {
      const { container } = render(
        <FragmentRender fragments={[]} locale="en" />
      );
      expect(container).toBeEmptyDOMElement();
    });

    it("renders single fragment correctly", () => {
      render(<FragmentRender fragments={[mockCTAFragment]} locale="en" />);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Click Here")).toBeInTheDocument();
    });

    it("renders multiple fragments in order", () => {
      render(
        <FragmentRender
          fragments={[mockCTAFragment, mockButtonFragment]}
          locale="en"
        />
      );
      const elements = screen.getAllByRole("button");
      expect(elements).toHaveLength(2);
      expect(elements[0]).toHaveTextContent("Click Here");
      expect(elements[1]).toHaveTextContent("Test Button");
    });
  });

  describe("Localization", () => {
    it("renders English content when locale is en", () => {
      render(<FragmentRender fragments={[mockCTAFragment]} locale="en" />);
      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.queryByText("Titre Test")).not.toBeInTheDocument();
    });

    it("renders French content when locale is fr", () => {
      render(<FragmentRender fragments={[mockCTAFragment]} locale="fr" />);
      expect(screen.getByText("Titre Test")).toBeInTheDocument();
      expect(screen.queryByText("Test Title")).not.toBeInTheDocument();
    });
  });

  describe("Error Handling", () => {
    it("handles missing fragment configs gracefully", () => {
      const invalidFragments = [{ _model: { title: "InvalidType" } }];

      render(<FragmentRender fragments={invalidFragments} locale="en" />);

      expect(console.warn).toHaveBeenCalledWith(
        expect.stringContaining("No configuration found for fragment type")
      );
    });

    it("handles null/undefined fragments gracefully", () => {
      const nullFragments = [null, undefined, mockCTAFragment];

      render(<FragmentRender fragments={nullFragments} locale="en" />);

      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });

    it("handles mapper errors gracefully", () => {
      // Mock console.error to prevent test output noise
      jest.spyOn(console, "error").mockImplementation(() => {});

      const brokenFragment = {
        _model: { title: "SCLabs-Feature-v1" },
        // Provide partial data to trigger validation error
        scTitleEn: "Test Title",
        // Missing: scTitleFr, scContentEn, scContentFr, scLabsButton
      };

      // Wrap render in try-catch since we expect an error
      try {
        render(<FragmentRender fragments={[brokenFragment]} locale="en" />);
      } catch (error) {
        // Verify the error is what we expect
        expect(error.message).toContain("Missing required fields");
        expect(error.message).toContain("scTitleFr");
        expect(error.message).toContain("scContentEn.json");
        expect(error.message).toContain("scContentFr.json");
        expect(error.message).toContain("scLabsButton.0.scId");
      }

      // Verify error was logged
      expect(console.error).toHaveBeenCalled();
    });

    it("validates required fields", () => {
      const brokenFragment = {
        _model: { title: "SCLabs-Feature-v1" },
        scTitleEn: "Test Title",
      };

      expect(() => {
        render(<FragmentRender fragments={[brokenFragment]} locale="en" />);
      }).toThrow("Missing required fields");
    });
  });

  describe("Props Handling", () => {
    it("respects excludeH1 prop", () => {
      render(
        <FragmentRender
          fragments={[mockCTAFragment]}
          locale="en"
          excludeH1={true}
        />
      );

      // Verify H1 is not present
      const heading = screen.queryByRole("heading", { level: 1 });
      expect(heading).not.toBeInTheDocument();

      // Verify other content is still rendered
      expect(
        screen.getByText(
          "The Benefits Navigator is a tool mainly for professionals who help people with their government benefits."
        )
      ).toBeInTheDocument();
    });

    it("handles missing optional props", () => {
      render(
        <FragmentRender
          fragments={[mockCTAFragment]}
          locale="en"
          // excludeH1 not provided
        />
      );

      // Verify H1 is present when excludeH1 is not provided
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Benefits Navigator");
    });
  });
});
