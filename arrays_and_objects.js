/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

// { } object
// [ ] array
// objects can be nested inside other objects, or other arrays
// arrays can be nested inside other arrays or other objects


let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}


// TODO Extract the latitude value, and log it to the console.
let position = iss_location.iss_position
console.log(position)


let latitude = iss_location.iss_position.latitude
console.log(latitude)
// TODO Extract the longitude value, and log it to the console.
let longitude = iss_location.iss_position.longitude
console.log(longitude)



/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194,
    //"CHF": 1.1787
}

// if you can use this syntax it's less typing and more common
// only works if the property name is a valid JS variable name
rates.CHF = 1.1787 // option 1

// sometimes we need to use this notation
// for example, the property name is not a valid JavaScript variable name
// other reason is when the property name is stored in the variable itself
rates['CHF'] = 1.1787 // option 2
console.log(rates)

let euroToAUD = 100 * 1.5417
console.log(`Current exchange rate of Euros to AUD is ${rates.AUD}, value of 100 Euros in AUD = ${euroToAUD}`)
// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
//  Complete
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)



/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [  // array
    { name: "Bill Clinton", cat: "Socks" }, // elements of the array are objects
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

let taylorSwiftCat = {name: 'Taylor Swift', cat: 'Meredith'}

cats_and_owners.push(taylorSwiftCat)  // push adds a new item to the end of an array
console.log(cats_and_owners) // just checking...
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"

cats_and_owners.forEach(function(catAndOwner){    /* this variable represents one thing in the array */
    console.log('Owner & Cat', catAndOwner)
    let owner = catAndOwner.name
    let cat = catAndOwner.cat
    console.log(`${owner}'s cat is called ${cat}`)
})
// TODO print Gary Oldman's cat's name by reading the data in the appropriate array index, using [] notation
console.log(cats_and_owners[1].cat)
// TODO print Gary Oldman's cat's name by looping over the array until you find the object with name = "Gary Oldman"
let search = 'Gary Oldman'
let results = []
for (let i=0; i < cats_and_owners.length; i++) {
    for(k in cats_and_owners[i]) {
        if(cats_and_owners[i][k].indexOf(search)!=-1) {
            results.push(cats_and_owners[i].cat)
            console.log(`Gary Oldman's cat's name is ${results}`)
        }
    }
}

// if (cats_and_owners.includes(search) !== -1) {
//     console.log(`${search} is present in the array`)
// } else {
//     console.log(`${search} is not present in the array`)
// }



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */


let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

let nobel_prize = nobel_prize_winners_2017.prizes
console.log(nobel_prize)

// nobel_prize[0] = physics
// nobel_prize[1] = chemistry
// nobel_prize[2] = medicine
// nobel_prize[3] = literature
// nobel_prize[4] = peace
// nobel_prize[5] = economics

// TODO print the full name of the Literature Nobel laureate.
let nobel_prize_literature_full_name = nobel_prize[3].laureates[0].firstname + ' ' +nobel_prize[3].laureates[0].surname
console.log(`The 2017 nobel prize winner for literature was ${nobel_prize_literature_full_name}`)

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
let nobel_prize_physics_ids = nobel_prize[0].laureates[0].id + ', ' +nobel_prize[0].laureates[1].id + ', and ' + nobel_prize[0].laureates[2].id
console.log(`The id's for the 2017 nobel prize winners for physics were: ${nobel_prize_physics_ids}`)

let physics_laureates_ids = nobel_prize[0].laureates
for (let i = 0; i < physics_laureates_ids.length; i++){
    console.log(`The #${i+1} id for the 2017 nobel prize winner for physics was: ${physics_laureates_ids[i].id}`)
}

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
let nobel_prize_category = nobel_prize[0].category + ', ' +  nobel_prize[1].category + ', ' +nobel_prize[2].category + ', ' + nobel_prize[3].category + ', ' + nobel_prize[4].category + ', and ' + nobel_prize[5].category
console.log(`The categories for the 2017 Nobel Prize consisted of: ${nobel_prize_category}`)

let name = nobel_prize
for (let i = 0; i < name.length; i= i+1){
    console.log(name[i].category)
}

// TODO write code to print the total number of prize categories
let num_categories = (nobel_prize.length)
console.log(`The total number of 2017 Noble Prize categories were: ${num_categories}`)

// TODO write code to count the total number of laureates from 2017.
let num_laureates = nobel_prize[0].laureates.length + nobel_prize[1].laureates.length + nobel_prize[2].laureates.length + nobel_prize[3].laureates.length + nobel_prize[4].laureates.length + nobel_prize[5].laureates.length
console.log(`The total number of 2017 Noble Prize laureates were: ${num_laureates}`)





