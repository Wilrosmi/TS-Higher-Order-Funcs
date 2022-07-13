import filter from "./filter";

test("", () => {
  expect(filter([10, 50, -20, -10, 100], (v) => v < 11)).toStrictEqual([
    10, -20, -10,
  ]);
  expect(
    filter("AbcDeFgHI".split(""), (ch) => ch.toUpperCase() === ch),
  ).toStrictEqual(["A", "D", "F", "H", "I"]);
  expect(filter([true, true, false, false, true], (x) => x)).toStrictEqual([
    true,
    true,
    true,
  ]);
  expect(
    filter([[], [1], [], [], [[5]], [7, 8]], (x) => x.length !== 0),
  ).toStrictEqual([[1], [[5]], [7, 8]]);
});
