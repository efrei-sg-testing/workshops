import { niOuiNiNon } from "./yesno";

test("niOuiNiNon avec oui et non  => false", () => {
  expect(niOuiNiNon("J'en ai entendu parler oui c'est vrai")).toBe(false);
});

test("sans les mots interdits  => true", () => {
    expect(niOuiNiNon("j'aime la tarte au citron")).toBe(true);
  });