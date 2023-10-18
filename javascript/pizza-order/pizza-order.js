/// <reference path="./global.d.ts" />
//
// @ts-check

const pizzasPrice = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10
}

const extrasPrice = {
  ExtraSauce: 1,
  ExtraToppings: 2
}

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let price = pizzasPrice[pizza]
  let totalPrice = extras.reduce((acc, currentValue) => acc + extrasPrice[currentValue], price)
  return totalPrice
}

/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let orderPrice = 0
  if (pizzaOrders < 1) return orderPrice

  for (let i = 0; i < pizzaOrders.length; i++) {

    if (pizzaOrders[i].extras.length >= 1) {
      orderPrice += pizzaPrice(pizzaOrders[i].pizza, ...pizzaOrders[i].extras)
    } else {
      orderPrice += pizzaPrice(pizzaOrders[i].pizza)
    }

  }
  return orderPrice
}
