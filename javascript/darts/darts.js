//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  let score = x + y

  if (x <= 0.7 && x >= -0.7) {
      if ((score >= 0 && score <= 1.4) || (score <= 0 && score >= -1.4)) return 10
  }

  if ((x >= 0 && x <= 5) || (x <= 0 && x >= -5)) {
      if ((score >= 0 && score <= 5) || (score <= 0 && score >= -5)) return 5
  }

  if ((x >= 0 && x <= 7) || (x <= 0 && x >= -7)) {
      if ((score >= 0 && score <= 10) || (score <= 0 && score >= -10)) return 1
  }

  return 0
};
