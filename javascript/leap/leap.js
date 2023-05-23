//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (imput) => {
return imput % 100 === 0 ? imput % 400 === 0 : imput % 4 === 0
}
