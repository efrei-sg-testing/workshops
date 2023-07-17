import { niOuiNiNon } from "./yesno";

test("cette phrase contient oui ou non ! : true", () => {
    expect(niOuiNiNon('cette phrase contien Oui !')).toBe(true);
});

test("cette phrase contien oui ou non ! : true", () => {
    expect(niOuiNiNon('ni non')).toBe(true);
});

test("cette phrase contien oui ou non : false  !", () => {
    expect(niOuiNiNon('hello efrei')).toBe(false);
});

