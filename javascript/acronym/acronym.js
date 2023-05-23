//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (imput) => {
  return imput
  .match(/[a-zA-Z']+/g)
  .reduce((accumulator, currentValue) => accumulator += currentValue[0],'')
  .toUpperCase()
};
