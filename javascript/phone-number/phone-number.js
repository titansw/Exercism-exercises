//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (imput) => {
  let number = [...imput]
  if (/[a-z]/i.test(number)) throw new Error('Letters not permitted')
  if (/[@|:|!]/.test(number)) throw new Error('Punctuations not permitted')
  let result = number.filter(element => element >= 0 && element != ' ')

  if (result[0] == 0) throw new Error('Area code cannot start with zero')
  if (result[0] != 1 && result.length == 11) throw new Error('11 digits must start with 1')
  if (result[0] == 1 && result.length == 10) throw new Error('Area code cannot start with one')
  if (result[1] == 0 && result.length == 11) throw new Error('Area code cannot start with zero')
  if (result[1] == 1 && result.length == 11) throw new Error('Area code cannot start with one')

  if (result[0] == 1 && result.length == 11) result.shift()

  if (result.length < 10) throw new Error('Incorrect number of digits')
  if (result.length > 11) throw new Error('More than 11 digits')
  
  if (result[3] == 0) throw new Error('Exchange code cannot start with zero')
  if (result[3] == 1) throw new Error('Exchange code cannot start with one')
  return result.join('')
};
