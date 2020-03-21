module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        if (str[i] == bracketsConfig[j][1]) {
          if (stack.length > 0 && stack[stack.length - 1] == str[i]) {
            stack.pop();
            break;
          }
        }
        stack.push(str[i]);
      }
      else if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][1] != bracketsConfig[j][0]) {
        if (stack.length > 0) {
          if (stack[stack.length - 1] == bracketsConfig[j][0]) stack.pop();
          else return false;
        } else return false;
      }
    }
  }
  return stack.length == 0 ? true : false;
}
/*
module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let ans;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      //if (bracketsConfig[j][0] != bracketsConfig[j][1]) {
      if (str[i] == bracketsConfig[j][0] && bracketsConfig[j][0] != bracketsConfig[j][1]) {
        stack.push(str[i]);
        //break;
      }
      if (stack.length != 0) {
        if (str[i] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]) {
          stack.pop();
          break;
        }
      } else return false;
      //stack.push(str[i]);
    }
  }
  return (stack.length == 0) ? true : false;
}*/