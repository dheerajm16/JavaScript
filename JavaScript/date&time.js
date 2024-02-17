// Dates

// let newDate = new Date
// console.log(newDate.toString())
// console.log(newDate.toDateString())
// console.log(newDate.toJSON())
// console.log(newDate.toISOString())
// console.log(newDate.toTimeString())
// console.log(newDate.toLocaleDateString())
// console.log(newDate.toLocaleString())


// let timeStamp = Math.floor(Date.now()/1000)
// console.log(timeStamp)

let date = new Date()
console.log(date.getDay() + 1)

date.toLocaleString('default', {
    weekday: "long",

})

