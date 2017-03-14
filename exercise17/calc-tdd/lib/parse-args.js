module.exports = (argArray) => {
  if(argArray.length = 1) {

    let[num1,operator,num2] = argArray[0].split('')

     return {num1,num2,operator};
  }
 let [num1,operator,num2] = argArray;
  return {num1,num2,operator};

}
