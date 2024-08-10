const name = "suyash"
const repoCount = 50
console.log(name + repoCount + " jain");  //old way
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); //new

//properties--


const gameName = new String('Suyash-jn')
console.log(gameName[7]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());  //but doesnt change our orignal value/string -- memory concept
console.log(gameName.charAt(6));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,4) //substring only for numbers
console.log(newString);

const anotherString = gameName.slice(-8,4)  //we can add integer
console.log(anotherString);

const newStringOne ="     suyash    "
console.log(newStringOne);
console.log(newStringOne.trim()); //cut the spaces

const url = "https/suyashjain.com%20"  //to replace and find using url.
console.log(url.replace ('%20', '-'));
console.log(url.includes('suyash'));

console.log(gameName.split('-')); //convert nameName string into array

