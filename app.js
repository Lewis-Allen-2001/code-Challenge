export function isPalindrome(string) {
  // hint - strings can be turned into arrays
  for (let i = 0; i < string.length / 2; i++) {
    // run some code
    if (string[i] != string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

isPalindrome("racecar");
