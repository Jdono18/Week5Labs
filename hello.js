console.log('Hello World!')

//three ways to create variables
let color = 'blue'
var size = 'medium' // not recommended
const language = 'JavaScript' // can't change this value.
/*language = 'C*'

language = language.trim()*/

// if you don't plan to modify data use const

let quantity = 5
let distance = 4.5

let text = 'Hello World'
let message = 'Hi Programmers'

console.log('There are ' + quantity + ' programmers')

let todayTemp = 75
console.log('Today\'s temperature is ' + todayTemp + 'F')
let tempC = (todayTemp - 32) * 5/9
console.log('Today\'s temperature is ' + tempC.toFixed(1) + 'C')

