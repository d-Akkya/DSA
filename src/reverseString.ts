// with built-in methods
/* 
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
*/

// without built-in methods
const reverseString = (str: string): string => {
  let reversedStr: string = "";
  for (let i: number = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

console.log(reverseString("Akkya"));

export default reverseString;
