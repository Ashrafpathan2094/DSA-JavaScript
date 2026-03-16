var decodeString = function (s) {
  let stack = [];
  let currNum = "";
  let resStr = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      currNum += s[i];
    } else if (s[i] === "[") {
      stack.push({ num: currNum, str: "" });
      currNum = "";
    } else if (s[i] === "]") {
      const currStr = stack[stack.length - 1].str.repeat(
        stack[stack.length - 1].num,
      );
      stack.pop();
      if (stack.length) {
        stack[stack.length - 1].str = stack[stack.length - 1].str + currStr;
      } else {
        resStr += currStr;
      }
    } else {
      if (stack.length) {
        stack[stack.length - 1].str = stack[stack.length - 1].str + s[i];
      } else {
        resStr += s[i];
      }
    }
  }
  return resStr;
};

console.log("decodeString(;)", decodeString("2[abc]3[cd1[aa2[e]]2[r]]5[a]ef"));
