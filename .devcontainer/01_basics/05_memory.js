// Heap and stack

//Stack-- For primitive type

let myYoutube = "suyash.com"  //original
let anothername = myYoutube
anothername = "kohinoor.com"  //copy---so this will apperently print

console.log(myYoutube);  
console.log(anothername);

//heap -- for non primitive

let userOne = {
    email : "archit.com",
    upi : "archit@ybl"
}
let userTwo = userOne

userTwo.email = "jain@goolgle.com" //now here we changed the reference so user1=user2 = jain@google.com

console.log(userTwo.email); //.email use to get access of particular object
console.log(userOne.email);





