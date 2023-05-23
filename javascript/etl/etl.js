//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (imput) => {
  let newObj = {}
  for (let i in imput) {
    for (let letter of imput[i]) {
      newObj[letter.toLowerCase()] = Number(i)
    }
  }
  return newObj
};
