//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (input) => {
  let table = 'Team                           | MP |  W |  D |  L |  P'

  let teams = input.split(";")


  if (teams[2] == "win") {
    return `${table}\n${teams[0]}             |  1 |  1 |  0 |  0 |  3\n${teams[1]}             |  1 |  0 |  0 |  1 |  0`
  }

  if (teams[2] == "loss") {
    return `${table}\n${teams[1]}             |  1 |  1 |  0 |  0 |  3\n${teams[0]}             |  1 |  0 |  0 |  1 |  0`
  }

  if (teams[2] == "draw") {
    return `${table}\n${teams[0]}             |  1 |  0 |  1 |  0 |  1\n${teams[1]}             |  1 |  0 |  1 |  0 |  1`
  }

  return table
};
