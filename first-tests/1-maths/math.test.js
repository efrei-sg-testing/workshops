import { sum, subtract } from "./math";

test("sum of 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtract 1 from 3 equals 2", () => {
  expect(subtract(3,1)).toBe(2);
});
