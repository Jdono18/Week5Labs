let birds = ['Owl', 'Robin', 'Eagle'] // array of bird objects
console.log(birds)

birds.forEach(function(bird, index) {
    // repeat once for each object in array
    // function will be called for each object in the array
    console.log(index, bird)
})

for (let x = 0; x< birds.length; x = x+1){
    let bird = birds[x]
    console.log(x, bird)
}

/* A while loop to double a number and display it Stop when the number is greater than 100*/
let maxVal = 100
let number = 1
while (number < maxVal){
    number *= 2
    console.log('number = ' + number)
}

letWhereIsBird = birds.indexOf('Robin')
    console.log(letWhereIsBird)

let text = 'The classes are itec 1150, itec 1250, itec 2560'

let replaced = text.replaceAll('itec', 'ITEC')
console.log(replaced)