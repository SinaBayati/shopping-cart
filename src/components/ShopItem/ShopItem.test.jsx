import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import ShopItem from "./ShopItem";

describe("ShopItem", () => {
  it("renders ShopItem correctly", () => {
    const { container } = render(<ShopItem />);

    expect(container).toMatchSnapshot();
  });
});
