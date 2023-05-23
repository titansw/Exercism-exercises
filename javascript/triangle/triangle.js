//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sideA = sides[0]
    this.sideB = sides[1]
    this.sideC = sides[2]

    this.itsValid = this.sideA > 0 && this.sideB > 0 && this.sideC > 0
    this.itsValid = this.itsValid ? this.sideA + this.sideB >= this.sideC : false
    this.itsValid = this.itsValid ? this.sideB + this.sideC >= this.sideA : false
    this.itsValid = this.itsValid ? this.sideC + this.sideA >= this.sideB : false
  }

  get isEquilateral() {
    return this.itsValid && this.sideA === this.sideB && this.sideB === this.sideC && this.sideC === this.sideA
  }

  get isIsosceles() {
    return this.itsValid && (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC)
  }

  get isScalene() {
    return this.itsValid && this.sideA != this.sideB && this.sideA != this.sideC && this.sideB != this.sideC
  }
}
