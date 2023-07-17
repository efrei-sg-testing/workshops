import { hangmanState } from "./hangman";

test("hangmanState returns lose if player tried too many letters", () => {
  expect(hangmanState("a", "bcdefghyup")).toBe("lose");
});

test("hangmanState returns in_progress if game is ongoing", () => {
  expect(hangmanState("a", "bcd")).toBe("in_progress");
});

test("hangmanState returns win if player wins", () => {
  expect(hangmanState("a", "bcda")).toBe("win");
});

test("hangmanState ignores spaces", () => {
  expect(hangmanState("a", "bc             da")).toBe("win");
});

test("hangmanState ignores case in word to guess", () => {
  expect(hangmanState("A", "bcda")).toBe("win");
});

test("hangmanState ignores case in guessed letters", () => {
  expect(hangmanState("a", "bcdA")).toBe("win");
});
