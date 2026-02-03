var isPalindrome = function (s) {
  if (s.length === 1) {
    return true;
  }
  i = 0;
  k = s.length - 1;
  while (i < k) {
    const charCodeI = s[i].toLowerCase().charCodeAt(0);
    const charCodeK = s[k].toLowerCase().charCodeAt(0);
    const checkI = checkAlphanumeric(s[i]);
    const checkK = checkAlphanumeric(s[k]);
    if (!checkI && !checkK) {
      i++;
      k--;
    } else if (!checkI) {
      i++;
      continue;
    } else if (!checkK) {
      k--;
      continue;
    } else if (charCodeI === charCodeK) {
      i++;
      k--;
    } else if (charCodeI !== charCodeK) {
      return false;
    }
  }
  return true;
};

const checkAlphanumeric = (char) => {
  const charCode = char.toLowerCase().charCodeAt(0);
  if (
    (charCode >= 97 && charCode <= 122) ||
    (charCode >= 48 && charCode <= 57)
  ) {
    return true;
  }
};

console.log("isPalindrome([]", isPalindrome("A man, a plan, a canal: Panama"));
console.log("isPalindrome([]", isPalindrome("race a car"));
console.log("isPalindrome([]", isPalindrome("0P"));
console.log("isPalindrome([]", isPalindrome(".,"));
