//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (imput) => {
  if (imput == "") return imput
  let nw = [] 
  
  for(let i = 0; i <= imput.length; i++){
    nw.push(imput[0].slice(i,i+1) )
  }

  return nw
  // imput[0].slice(0,1) + imput[1].slice(0,1) 
  //imput[0].slice(1,2) + imput[1].slice(1,2) 
}
