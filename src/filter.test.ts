import filter from "./filter";

test("", () => {
  expect(filter([10, 50, -20, -10, 100], v => v < 11)).toBe([10, -20, -10]);
  expect(filter("AbcDeFgHI".split(""), ch => ch.toUpperCase() === ch)).toBe(["A", "D", "F", "H", "I"]);
  expect(filter([true, true, false, false, true], x => x)).toBe([true, true, true]);
  expect(filter([[], [1], [], [], [[5]], [7, 8]], x => x.length !== 0)).toBe([[1], [[5]], [7, 8]]);
});
