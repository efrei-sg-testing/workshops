import { niOuiNiNon } from "./yesno";

test("niOuiNiNon returns false when sentence contains oui", () => {
  expect(niOuiNiNon("coucou je contiens oui")).toBe(false);
});

test("niOuiNiNon returns false when sentence contains uppercase non", () => {
  expect(niOuiNiNon("coucou je contiens NoN")).toBe(false);
});

test("niOuiNiNon returns true when sentence is valid", () => {
  expect(niOuiNiNon("salut ouais")).toBe(true);
});
