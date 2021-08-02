/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { HTMList } from "./HTMList";

describe("HTMList", () => {
  it("renders a list of 3 items", () => {
    render(<HTMList content="* one * two * three" />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);

    const itemsArray = items.map((item) => item.textContent);
    expect(itemsArray).toEqual(["one", "two", "three"]);
  });

  const listElements = ["ul", "ol"];
  listElements.map((listElement) => {
    it(`renders a list of 3 items as an "${listElement}"`, () => {
      render(<HTMList tag={listElement} content="* one * two * three" />);
      const items = screen.getAllByRole("listitem");
      expect(items.length).toBe(3);
    });
  });

  it("renders a list of 0 items if empty content", () => {
    render(<HTMList content="" />);
    const items = screen.queryAllByRole("listitem");
    expect(items.length).toBe(0);
  });

  it("renders a list of 1 item if no asterisk", () => {
    render(<HTMList content="one two three" />);
    const items = screen.queryAllByRole("listitem");
    expect(items.length).toBe(1);
  });

  it("renders a list of 1 item if 1 asterisk at the start", () => {
    render(<HTMList content="* one two three" />);
    const items = screen.queryAllByRole("listitem");
    expect(items.length).toBe(1);
  });

  it("renders a list of 2 items if 1 asterisk in the middle of the string", () => {
    render(<HTMList content="one two * three" />);
    const items = screen.queryAllByRole("listitem");
    expect(items.length).toBe(2);
  });
});
