import { niOuiNiNon } from "./yesno";

test("niOuiNiNon returns false when sentence contains Oui", () => {
  expect(niOuiNiNon("coucou je contiens oui")).toBe(false);
});

test("niOuiNiNon returns false when sentence contains Oui", () => {
  expect(niOuiNiNon("coucou je contiens rien")).toBe(true);
});

test("niOuiNiNon returns false when sentence contains Oui", () => {
  expect(niOuiNiNon("coucou je contiens NON")).toBe(false);
});