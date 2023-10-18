//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const unit = {
  0: "",
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX"
}

const decimal = {
  0: "",
  1: "X",
  2: "XX",
  3: "XXX",
  4: "XL",
  5: "L",
  6: "LX",
  7: "LXX",
  8: "LXXX",
  9: "XC"
}

const hundred = {
  0: "",
  1: "C",
  2: "CC",
  3: "CCC",
  4: "CD",
  5: "D",
  6: "DC",
  7: "DCC",
  8: "DCCC",
  9: "CM"
}

const thousand = {
  1: "M",
  2: "MM",
  3: "MMM"
}

export const toRoman = (input) => {
  const number = Array.from(String(input))

  return number.length == 2 ? decimal[number[0]] + unit[number[1]] :
    number.length == 3 ? hundred[number[0]] + decimal[number[1]] + unit[number[2]] :
      number.length == 4 ? thousand[number[0]] + hundred[number[1]] + decimal[number[2]] + unit[number[3]] :
        unit[input]
};
