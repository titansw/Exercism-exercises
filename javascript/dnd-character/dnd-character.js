//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.

import { error } from "console";

//
const Modifier = {
  3: -4,
  4: -3,
  5: -3,
  6: -2,
  7: -2,
  8: -1,
  9: -1,
  10: 0,
  11: 0,
  12: 1,
  13: 1,
  14: 2,
  15: 2,
  16: 3,
  17: 3,
  18: 4
}

export const abilityModifier = (input) => {
  if (input < 3) throw new Error("Ability scores must be at least 3")
  if (input > 18) throw new Error("Ability scores can be at most 18")
  return Modifier[input]
};

export class Character {

  static rollAbility() {
    this.number = []
    for (let i = 0; i <= 3; i++) {
      this.number.push(Math.floor(Math.random() * (6 - 1) + 1))
    }
    this.number.sort((a, b) => b - a).pop()
    return this.number.reduce((acc, current) => acc + current)
  }

  constructor() {
    this.str = Character.rollAbility()
    this.dex = Character.rollAbility()
    this.con = Character.rollAbility()
    this.int = Character.rollAbility()
    this.wis = Character.rollAbility()
    this.char = Character.rollAbility()
    this.hp = 10 + abilityModifier(this.con)
  }

  get strength() {
    return this.str
  }

  get dexterity() {
    return this.dex
  }

  get constitution() {
    return this.con
  }

  get intelligence() {
    return this.int
  }

  get wisdom() {
    return this.wis
  }

  get charisma() {
    return this.char
  }

  get hitpoints() {
    return this.hp
  }
}