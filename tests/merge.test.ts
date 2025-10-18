import { merge } from "../src/merge";

describe("merge()", () => {
  it("should merge three sorted arrays correctly", () => {
    const a = [1, 3, 5];
    const b = [2, 4, 6];
    const c = [9, 7, 3];
    expect(merge(a, b, c)).toEqual([1, 2, 3, 3, 4, 5, 6, 7, 9]);
  });

  it("should handle empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
  });

  it("should handle negative numbers", () => {
    const a = [-5, -1, 0];
    const b = [-3, 2, 4];
    const c = [10, 5, 1, -2]; // descending
    expect(merge(a, b, c)).toEqual([-5, -3, -2, -1, 0, 1, 2, 4, 5, 10]);
  });
});
