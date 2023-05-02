// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
      break
    case 'Energizer':
      return 1.5
      break
    case 'Green Garden':
      return 1.5
      break
    case 'Tropical Island':
      return 3
      break
    case 'All or Nothing':
      return 5
      break
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i = 0
  let count = 0
  while (i < wedgesNeeded) {
    for (let lime of limes) {
      if (i > wedgesNeeded) {
        break
      } else if (lime === 'small') {
        i += 6
      } else if (lime === 'medium') {
        i += 8
      } else if (lime === 'large') {
        i += 10
      } else {
        break
      }
      count += 1
    }
    break
  }
  return count
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let count = 0
  let count2 = 0
  while (count <= timeLeft) {
    for (let order of orders) {
      count += timeToMixJuice(order)
      count2 += 1
      if (count >= timeLeft) {
        break
      }
    }
    break
  }
  orders.splice(0, count2)
  return orders
}
