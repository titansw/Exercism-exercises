//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (imput, count = 0) => {
  if (imput <= 0) throw new Error('Only positive numbers are allowed')
  if (imput === 1) return count
  return steps(imput % 2 === 0 ? imput / 2 : imput * 3 + 1, count + 1)
};
