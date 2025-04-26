import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ErrorElement from "./ErrorElement";

describe("ErrorElement", () => {
  it("renders ErrorElement correctly", () => {
    const { container } = render(<ErrorElement />, { wrapper: BrowserRouter });

    expect(container).toMatchSnapshot();
  });
});
