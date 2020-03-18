module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        stack.push(str[i]);
        continue;
      }

      if (stack.length == 0) {
        return false;
        if (stack[length - 1] == bracketsConfig[j][0]) {
          stack.pop();
          continue;
        } else return false;
      }
    }
  }
  return stack.length != 0 ? false : true;
}
