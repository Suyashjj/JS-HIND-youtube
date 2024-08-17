// array
//Part-A

const myArr =  [0,1,2,3,4,5]  

const myHeros = ["hulk","spiderman"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// array methods

myArr.push(6)  //add 6,7
myArr.push(7)
myArr.pop()  //remove last element i.e 7
console.log(myArr);

myArr.unshift(9)  //at starting  add 9 in beigning
myArr.shift()  //remove 9

console.log(myArr.includes(9)); //tell 9 is in array or not
console.log(myArr.indexOf(3)); //which element was in 3rd place

const newArray = myArr.join()

console.log(myArr);
console.log(newArray); //change the type

//slice and splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3) //return section of an array
console.log(myn1);

console.log("B ", myArr);  //Normal

console.log("C ", myArr);  
const myn2 = myArr.splice(1, 3) //position from 1 to 3 got seperated from 0,4,5
console.log(myn2);

//-------------------------------------------------------------------------------------------------------------------------------
//Part-2

//concat and spread to merge array

const marvel_heroes = ["hulk", "thor", "spiderman"]
const dc_heroes =["superman", "flash", "batman"]

const all_heros = marvel_heroes.concat(dc_heroes)  //Method 1
console.log(all_heros);

const all_hereos = [...marvel_heroes,...dc_heroes] //Method 2
console.log(all_hereos);

const another_array = [1,2,,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //bracets not count act as single array
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); //tell whether its array or not
console.log(Array.from("Suyash")); //convert to string
console.log(Array.from({name:"Suyash"})) //empty list means it cant able to convert

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //join all
















