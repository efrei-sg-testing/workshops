import { niOuiNiNon } from "./yesno";

test("phrase contient oui", () => {
  expect(niOuiNiNon("J en ai entendu parler oui c'est vrai return false")).toBe(false);
});

test("phrase ne contient ni oui ni non return true", () => {
    expect(niOuiNiNon("j aime la tarte au citron")).toBe(true);
  });
