import merge from "../mergePRIMO/merge";

describe("merge", () => {
  it("should merge two sorted arrays", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should handle empty arrays", () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([2, 4, 6, 8]);
  });

  it("should handle arrays of different lengths", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6, 8, 10];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 10]);
  });

  it("should handle arrays with duplicate values", () => {
    const collection1 = [1, 3, 3, 7];
    const collection2 = [3, 3, 6, 7, 8];
    const result = merge(collection1, collection2);
    expect(result).toEqual([1, 3, 3, 3, 3, 6, 7, 7, 8]);
  });
});
