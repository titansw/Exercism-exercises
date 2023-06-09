//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const words1 = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

export const rotate = (word, num) => {
  if (num == 0 || num == 26) return word
  let valor
  let nw = []

  for (let i of word) {
    if (/[0-9|!',. ]/.test(i)) {
      nw.push(i)
      continue
    }
    if (i === i.toUpperCase()) {
      valor = words1.indexOf(i.toLowerCase()) + num
      if (valor >= 26) valor -= 26
      nw.push(words1[valor].toUpperCase())
    } else {
      valor = words1.indexOf(i) + num
      if (valor >= 26) valor -= 26
      nw.push(words1[valor])
    }
    valor = 0
  }
  return nw.join("")
};
