//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (n1, n2) => {
  if (n1.length != n2.length) throw new Error('strands must be of equal length')
  let count = 0
  for (let i in n1) {
    if (n1[i] != n2[i]) count++
  }
  return count
};
