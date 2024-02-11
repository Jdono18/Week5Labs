function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!!'
    return shouty_text
}

console.log(shout('hello world'))
let message = shout('hello web programmers')
console.log(message)

function f_to_c(f, decimalPlaces){
    let celsius = (f - 32) * 5/9
    if (decimalPlaces) {  // undefined values are considered to be false
        return celsius.toFixed(decimalPlaces)  // falsy values = undefined, null, empty lists, empty objects, 0, false
    } else {
        return celsius
    }

}
let todayTemp = 75
let tempC = (todayTemp -32) * 5/9
todayCelsius = f_to_c(todayTemp, 2)
console.log(todayCelsius)
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp}F`)