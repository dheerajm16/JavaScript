// Arrays

const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr[0])

const fruits = ["apple", "banana", "mango"]
const veggies = ["spinach", "chilli", "carrot"]
// console.log(fruits.length)

// Array Methods

// arr.push(8)
// arr.pop()

const newArr = arr.join()
// console.log(arr)
// console.log(newArr)

const arr2 = arr.slice(1, 3)
console.log(arr2)
console.log(arr)

const arr3 = arr.splice(1, 3)
console.log(arr3)
console.log(arr)

// fruits.push(veggies)
// console.log(fruits)

// const eatables = fruits.concat(veggies)
// console.log(eatables)

const eatables =  [...fruits, ...veggies]
console.log(eatables)

console.log(Array.from("Hello World"))


