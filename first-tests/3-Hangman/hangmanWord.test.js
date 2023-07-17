import { hangmanWord } from "./hangman";

test("hangmanWord guessedLetters.toUpperCase", () => {
  expect(hangmanWord("Canard", "azrdcen")).toBe("CANARD");
});

test("hangmanWord guessedLetters IN PROGRESS CANA__", () => {
  expect(hangmanWord("Canard", "eztcuyRnklamj")).toBe("CANAR_");
});

test("hangmanWord guessedLetters IN PROGRESS CANA__", () => {
  expect(hangmanWord("Canard", "hhhhhhh")).toBe("______");
});


test("hangmanWord guessedLetters IN PROGRESS _AB_B_C_E_", () => {
  expect(hangmanWord("rabibocher", "eapbcu")).toBe("_AB_B_C_E_");
});


test("hangmanWord guessedLetters IN PROGRESS _AB_B_C_E_", () => {
  expect(hangmanWord("", "azerty")).toBe("");
});

