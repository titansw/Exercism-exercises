/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
    return timer == `0` ? 'Lasagna is done.' : !timer ? 'You forgot to set the timer.' : 'Not done, please wait.'
}

export function preparationTime(layers, quantity) {
    return !quantity ? layers.length * 2 : layers.length * quantity
}

export function quantities(array) {
    let quantity = { noodles: 0, sauce: 0 }

    for (let qunt of array) {
        if (qunt == 'noodles') quantity.noodles += 50
        if (qunt == 'sauce') quantity.sauce += 0.2
    }
    return quantity
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, quantity) {
    const rcp = { ...recipe }
    if (!quantity) quantity = 2
    for (let i in recipe) {
        rcp[i] = recipe[i] * quantity / 2
    }
    return rcp
}