//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (imput) => {
  if (imput == '') return true
  let arr = [...new Set(imput.toLowerCase().match(/[a-zA-Z]/g))]
  return imput.match(/[a-zA-Z]/g).length === arr.length
};
