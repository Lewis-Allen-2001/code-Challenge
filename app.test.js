//this line handles the testing for us
import { test, expect } from "vitest";
//we need to import the function to test
import { isPalindrome } from "./app";

//im expexting the result to work and pass
test("check if isPalindrome works 'racecar'", function () {
  expect(isPalindrome("racecar")).toBe(true);
});
