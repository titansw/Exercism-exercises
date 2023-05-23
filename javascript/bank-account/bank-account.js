//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { doesNotThrow, throws } from "assert"

export class BankAccount {
  constructor() {
    this.opened
    this.count = 0
    this.closed
  }

  open() {
    if (this.opened === true) throw new ValueError
    this.opened = true
    this.closed = false
  }

  close() {
    if (this.opened != true) throw new ValueError
    this.closed = true
    this.opened = false
    this.count = 0
  }

  deposit(imput) {
    if (this.closed === true || imput < 0) throw new ValueError
    this.count += imput
  }

  withdraw(wd) {
    if (this.closed === true || wd > this.count || wd < 0) throw new ValueError
    this.count -= wd
  }

  get balance() {
    if (this.closed === true) throw new ValueError
    return this.count
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
