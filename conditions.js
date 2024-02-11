// pre-requisites for Android Programming - C# or Java

let takenCSharp = true
let takenJava = false

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android Programming')
} else {
    console.log('You must take C# or Java')
}

// To be a senator you must:
// be at least 30 years old
// be a US Citizen for 9 or more years
// live in the state you want to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent) {
    console.log('Good news! You qualify to be a US Senator')
} else {
    console.log(`You do not meet the necessary requirements to be a US Senator in ${stateWantToRepresent}.`)
}
