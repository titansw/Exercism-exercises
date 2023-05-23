//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (imput) => {
  let out = ''
  if (imput % 3 === 0) out += 'Pling'
  if (imput % 5 === 0) out += 'Plang'
  if (imput % 7 === 0) out += 'Plong'
  if (imput % 3 != 0 && imput % 5 != 0 && imput % 7 != 0) out += String(imput)
  return out
};
