//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.num = num
    this.sum = num
    this.count = 0
    this.count2 = 0
    this.dif
  }

  get sumOfSquares() {
    for (this.sum; this.sum >= 0; this.sum--) {
      this.count2 += this.sum * this.sum
    }
    return this.count2
  }

  get squareOfSum() {
    for (this.num; this.num >= 0; this.num--) {
      this.count += this.num
    }
    this.count *= this.count
    return this.count
  }

  get difference() {
   // this.dif = this.count - this.count2
    return this.squareOfSum - this.sumOfSquares
  }
}
