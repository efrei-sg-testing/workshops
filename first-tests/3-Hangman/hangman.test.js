import { hangmanState, hangmanWord } from "./hangman";

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

test("hangmanWord replaces found letters by an _", () => {
  expect(hangmanWord("Verre", "rV")).toBe("V_RR_");
});

test("hangmanWord works when no letters found", () => {
  expect(hangmanWord("Verre", "xyzzz")).toBe("_____");
});

test("hangmanWord works when all letters are found", () => {
  expect(hangmanWord("bouteille", "blitoue")).toBe("BOUTEILLE");
});
