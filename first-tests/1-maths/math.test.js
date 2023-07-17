import { sum,soust } from "./math";


test("sum of 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("soustraction of 2 - 1 equals 1", () => {
  expect(soust(2, 1)).toBe(1);
});
