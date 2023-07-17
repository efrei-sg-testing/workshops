import { hangmanState } from "./hangman";

test("passant CaNard avec eraubdnc => true", () => {
  expect(hangmanState("CaNard", "eraubdnc")).toBe("win");
});

test("passant CaNard avec eraubdnc => true", () => {
  expect(hangmanState("CaNard", "eztcuynklamj")).toBe("in_progress");
});

test("passant CaNard avec eraubdnc => true", () => {
  expect(hangmanState("CaNard", "eztcuynklamjh")).toBe("lose");
});