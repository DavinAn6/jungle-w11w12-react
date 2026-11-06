import { describe, expect, it } from "vitest";

describe("smoke", () => {
  it("jsdom에서 DOM을 만들 수 있음", () => {
    const el = document.createElement("div");
    el.textContent = "hi";
    expect(el.textContent).toBe("hi");
  });
});
