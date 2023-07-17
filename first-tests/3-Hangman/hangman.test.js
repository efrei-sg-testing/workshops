import { hangmanState, hangmanWord } from "./hangman";

test("passant CaNard avec eraubdnc => true", () => {
  expect(hangmanState("CaNard", "eraubdnc")).toBe("win");
});

test("passant CaNard avec eraubdnc => true", () => {
  expect(hangmanState("CaNard", "eztcuynklamj")).toBe("in_progress");
});

test("passant CaNard avec eraubdnc => true", () => {
  expect(hangmanState("CaNard", "eztcuynklamjh")).toBe("lose");
});

test("hangmanWord partially found =>  ", () => {
  expect(hangmanWord("rabibocher", "eapbuc")).toBe("_AB_B_C_E_");
});

test("hangmanWord all letter found", () => {
  expect(hangmanWord("CaNard", "eraubdnc")).toBe("CANARD");
});

test("hangmanWord no letter found", () => {
  expect(hangmanWord("CaNard", "gshukl")).toBe("______");
});

test("hangmanWord empty word to found", () => {
  expect(hangmanWord("", "gshukl")).toBe("");
});