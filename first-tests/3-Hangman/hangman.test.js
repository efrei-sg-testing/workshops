import { hangmanState, hangmanWord } from "./hangman";

//import { hangmanWord } from "./hangman";




test("doit retourner win", () => {

  expect(hangmanState("CaNard", "eraubdnc")).toBe("win");

});




test("doit retourner in_progress ", () => {

  expect(hangmanState("CaNard", "eztcuynklamj")).toBe("in_progress");

});




test("doit retourner lose", () => {

    expect(hangmanState("CaNard", "eztcuynklamjh")).toBe("lose");

  });




  test("doit retourner CANARD", () => {

    expect(hangmanWord("Canard", "eraubdnc")).toBe("CANARD");

  });




  test("doit retourner CANA__", () => {

    expect(hangmanWord("Canard", "eztcuynklamj")).toBe("CANA__");

  });




  test("doit retourner CANA__", () => {

    expect(hangmanWord("Canard", "eztcuynklamjh")).toBe("CANA__");

  });




  test("doit retourner _AB_B_C_E_", () => {

    expect(hangmanWord("rabibocher", "eapbuc")).toBe("_AB_B_C_E_");

  });

