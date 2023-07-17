import { petitBacScore } from "./petitBac";

test("petitBac returns the right scores when all words are unique", () => {
  const result = petitBacScore("A", ["Abricot", "Ananas"]);
  expect(result[0]).toBe(2);
  expect(result[1]).toBe(2);
});

test("petitBac returns the right scores when all words are identical", () => {
  const result = petitBacScore("A", ["Abricot", "Abricot"]);
  expect(result[0]).toBe(1);
  expect(result[1]).toBe(1);
});

test("petitBac returns the right scores when all words are wrong", () => {
  const result = petitBacScore("A", ["Yak", "XXXX"]);
  expect(result[0]).toBe(0);
  expect(result[1]).toBe(0);
});

test("petitBac returns the right scores when there is a mix", () => {
  const result = petitBacScore("B", ["Banane", "Coucou", "Brugnon", "Brugnon"]);
  expect(result[0]).toBe(2);
  expect(result[1]).toBe(0);
  expect(result[2]).toBe(1);
  expect(result[3]).toBe(1);
});

test("petitBac returns the right scores when all words are wrong", () => {
  expect(petitBacScore("B", []).length).toBe(0);
});
