const name = "Dheeraj"
const score = 80

console.log(name +  score + " B")

console.log(`Hello my name is ${name} and my score is ${score}`)

const gameName = new String('mario-Hi')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0, 4)
console.log(newString)

const newString2 = gameName.slice(0, 4)
console.log(newString2)

const newString3 = "  Dheeraj  "
console.log(newString3.trim())

const url = "https://xyz.com"
console.log(url.replace('xyz', 'dheeraj'))

console.log(gameName.split('-'))