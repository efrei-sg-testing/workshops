import { subtract, sum } from "./math";

test("sum of 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtraction of 1 - 2 equals -1", () => {
  expect(subtract(1, 2)).toBe(-1);
});
