let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[100])

animals[4] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals.push('elephant')
console.log(animals)

animals[3] = 'turtle'
console.log(animals)

animals.reverse()
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

if (animals.includes('cheetah')){
    console.log('cheetah is in the array')
}

console.log(animals.join(', '))

animals.forEach(function(animal){
    console.log(animal)
})

animals.forEach(function(animal){
    console.log(animal.length)
})

animals.push('alligator')
console.log(animals)

let animalNameLength = []
animals.forEach(function(animal){
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)