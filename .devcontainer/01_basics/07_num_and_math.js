//+++++++ Numbers ++++++++


const score = 400
console.log(score);  //here 400 is number

const balance = new Number(100)  //but here we specificly defined 100 is number
console.log(balance);

console.log(balance.toString().length); //we can alo convert it into string
console.log(balance.toFixed(2));  //use to convert 100--> 100.00

const otherNumber = 123.982
console.log(otherNumber.toPrecision(3)); //convert to 3 decimal number

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //help to put commas between value in indian style

//++++++++++++ MATHS ++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //do -ve to +ve
console.log(Math.round(4.6));
console.log(Math.floor(4.9)); //always give smallest posible
console.log(Math.ceil(4.2)); //always give biggest possible
console.log(Math.min(4,2,5,6,8));
console.log(Math.max(4,2,6,9));

console.log(Math.random()); //between 0 and 1
console.log(Math.random()*10); //simply multiplied by 10 to shift digit
console.log((Math.random()*10) +1);  //to avoid 0 we add 1
console.log(Math.floor(Math.random()*10) +1); //floor use

const min = 10
const max = 20

//formula
console.log(Math.floor(Math.random()*(max-min+1))+min); //to get diif,(+1)to ensure its not 0,(+min) to get minm above 10















