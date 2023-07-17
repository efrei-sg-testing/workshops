import { sum, subtract } from "./math";

test("sum of 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("substract of 5-1 equals 4", () => {
  expect(subtract(5, 1)).toBe(4);
});
