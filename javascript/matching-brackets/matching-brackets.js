//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  let stack = []
  const splitStr = [...string];
  let bracketsObj = { "{":"}", "(":")", "[":"]"};
  for (let i = 0; i < splitStr.length; i++) {
    if (/\{|\[|\(/.test(splitStr[i])) {
      stack.push(splitStr[i])
    } else if (/\}|\]|\)/.test(splitStr[i])) {
      let last = stack.pop();
      if (splitStr[i] !== bracketsObj[last]) return false;
    }
  }
  return (stack.length === 0);
};
