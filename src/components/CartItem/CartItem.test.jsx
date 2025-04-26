import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import CartItem from "./CartItem";

describe("CartItem", () => {
  it("renders CartItem correctly", () => {
    const { container } = render(<CartItem />);

    expect(container).toMatchSnapshot();
  });
});
