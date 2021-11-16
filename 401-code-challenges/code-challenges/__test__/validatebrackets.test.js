"use strict";

const validateBrackets = require("../Stack&Queue/brackets");

describe("VALIDATE BRACKETS TESTING", () => {
  test("if it will return true in mathcing case", () => {
    expect(validateBrackets("{}(){}")).toBe(true);
    expect(validateBrackets("{}")).toBe(true);
    expect(validateBrackets("()[[Extra Characters]]")).toBe(true);
    expect(validateBrackets("(){}[[]]")).toBe(true);
    expect(validateBrackets("{}{Code}[Fellows](())")).toBe(true);
  });

  test("if it will return false in not mathcing case", () => {
    expect(validateBrackets("[({}]")).toBe(false);
    expect(validateBrackets("(](")).toBe(false);
    expect(validateBrackets("{(})")).toBe(false);
  });
});
