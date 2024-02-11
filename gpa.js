function isGpa(gpa) {
    // All MN zip are between 55001 and 56763
    if (gpa >= 0.0 && gpa <= 4.0){
        return true
    } else {
        return false
    }
}

console.log(isGpa('0'))
console.log(isGpa('.2'))
console.log(isGpa('4.1'))
console.log(isGpa('4.0'))
console.log(isGpa(-1))

console.log(isGpa('-3'))
console.log(isGpa('4.1'))
console.log(isGpa('2.5'))
console.log(isGpa('4'))

function cityStateAddress(city, state){
    /*let address = city + ', ' + state.toUpperCase() // wi -> WI */
    let address = `${city}, ${state.toUpperCase()}`
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
let address = cityStateAddress('Seattle', 'wa')
console.log(address)

let className = 'Web Programming'
let classCode = '2560'
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)