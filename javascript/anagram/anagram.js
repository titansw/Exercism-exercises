//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (main, list) => {
  let lista = []
  let main2 = [...main.toLowerCase()]

  for (let i of list) {
    if (main.length != i.length || main.toLowerCase() == i.toLowerCase()) continue

    for (let a in i) {
      if (main2.some((element) => element == i[a].toLowerCase())) {
        main2.splice(main2.indexOf(i[a].toLowerCase()), 1);
      }
    }

    if (main2 == 0) lista.push(i)
    main2 = [...main]
  }
  return lista
}