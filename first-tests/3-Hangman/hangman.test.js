import { hangmanState, hangmanWord } from "./hangman";

test("the result of this test wil be in_progress", () => {
    console.log(hangmanState('adil', 'n'))
    expect(hangmanState('adil', 'n')).toBe('in_progress');
});

test("the result of this test wil be in_progress", () => {
    expect(hangmanState('adilsabiadilsabir', 'r')).toBe('in_progress');
});