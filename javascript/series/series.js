//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this.series = [...series].map(Number)
    this.new = []
    this.i = 0
  }

  slices(sliceLength) {
    if (this.series.length <= 0) throw new Error('series cannot be empty')
    if (sliceLength < 0) throw new Error('slice length cannot be negative')
    if (sliceLength === 0) throw new Error('slice length cannot be zero')
    if (sliceLength > this.series.length) throw new Error('slice length cannot be greater than series length')

    for (this.i; this.i + sliceLength <= this.series.length; this.i++) {
      this.new.push(this.series.slice(this.i, this.i + sliceLength))
    }
    return this.new
  }
}