import { sum } from "./math";
import {sub} from "./math";

test("sum of 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("sub of 4 - 2 equals 2", () => {
  expect(sub(4, 2)).toBe(2);
}); 