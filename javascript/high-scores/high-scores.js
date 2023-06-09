//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const descending = (a, b) => b - a;

export class HighScores {
  constructor(imput) {
    this.score = imput
/*     this.best = [...imput]
    this.top = []
    this.test
    this.i = 0
    this.ii = 3 */
  }

  get scores() {
    return this.score
  }

  get latest() {
    return this.score[this.score.length-1]
  }

  get personalBest() {
    /* return this.score.reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator = currentValue : accumulator) */
    //return this.score.sort(descending).slice(0, 1).join()
    return Math.max(...this.score)
  }

  get personalTopThree() {
    /* if (this.score.length < 3) this.ii = this.score.length

    for (this.i; this.i < this.ii; this.i++) {
      this.test = this.best.reduce((accumulator, currentValue) => accumulator < currentValue ? accumulator = currentValue : accumulator)
      this.top.push(this.test)
      this.best.splice(this.best.indexOf(this.test), 1)
    }
    return this.top */
    return this.score.sort(descending).slice(0, 3)
  }
}
