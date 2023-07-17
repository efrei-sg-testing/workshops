import { sum, subtract } from "./math";

test("sum of 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtract of 1 - 2 equals 3", () => {
  expect(subtract(3, 2)).toBe(1);
});
