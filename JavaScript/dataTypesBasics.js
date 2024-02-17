// Primitive Data Types

// 7 Types - String, Number, Boolean, null, undefined, Symbol, BigInt
console.log("Hello World")

let number = 1649029490n

console.log(typeof(number))

let fruits = ["banana", "apple", "cherry"]

console.log(typeof(fruits))

let fun = function(){
    console.log("Hello Buddy")
}

console.log(typeof(fun))

let user = {
    email: "xyz@gmail.com",
    pass: "xyz"
}

let userTwo = user;
userTwo.email = "dheeraj@gmailcom"

console.log(user)
console.log(userTwo)

