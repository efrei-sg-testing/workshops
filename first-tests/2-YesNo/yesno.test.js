import { niOuiNiNon } from "./yesno";

test("doit retourner true", () => {
    expect(niOuiNiNon("j'aime la tarte au citron")).toBe(true);
  });
  
  test("doit retourner false", () => {
    expect(niOuiNiNon("J'en ai entendu parler oui c'est vrai")).toBe(false);
  }); 