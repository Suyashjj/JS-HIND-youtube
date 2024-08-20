//literal and construtor
//singleton --if made from construtor then singleton 

//object literals


const mySym = Symbol("key1") // 1) taking symbol 

const JsUser = {
    NickName : "bittu", //commas are necessary
    "full Name": "Suyash jain", //if u leave space(full name) then put in ""
    age: 20,
    location : "Bhopal",
    email : "suyash@google.com",
    [mySym] : "mykey1",  // In square bracket to represent symbol otherwise it will be string 2) adding in object
}

console.log(JsUser["full Name"]); //in [""] format
console.log(JsUser[mySym]); // 3) printing symbol
console.log(typeof mySym); 

JsUser.email= "suyash@gpt.com" //changing email
Object.freeze(JsUser)  //but from here it will be freeze
JsUser.email= "suyash@micro.com"
console.log(JsUser);

//Function in objects

JsUser.greeting = function(){
    console.log("Hello users");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.NickName}`); //learn format and "this" to access object
}
console.log(JsUser.greeting()); //corrct way to access
console.log(JsUser.greetingTwo());
console.log(JsUser.greeting); //incorrect
console.log(JsUser.greetingTwo);

//-------------------------------------------------------------------------------------------------------------------------

//object constructor

// const tinderUser = new Object() //singleton representation
const tinderUser = {} //Non singleton represenation

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "suaysh@jain",
    fullname : {
        userfullname :{
            firstname : "suyash",
            lastname : "jain",
        }
    } 
}
// console.log(regularUser.fullname.userfullname.firstname); //access through nesting

//object.assign -- for merging

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6: "b"}

//const obj3={obj1, obj2} -- Not in this way

// const obj4 = Object.assign({},obj1,obj2,obj3)//rarely use
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const users= [                                                //objects in array
       {
          id : 1,
          age : 10
       },
       {
        
       },
       {
        
       },
]

users[1].age  //to access
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //data type will be array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //tell wether element is present or not
