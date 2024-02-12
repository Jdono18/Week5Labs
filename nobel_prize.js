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

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
let nobel_prize_category = nobel_prize[0].category + ', ' +  nobel_prize[1].category + ', ' +nobel_prize[2].category + ', ' + nobel_prize[3].category + ', ' + nobel_prize[4].category + ', and ' + nobel_prize[5].category
console.log(`The categories for the 2017 Nobel Prize consisted of: ${nobel_prize_category}`)

// TODO write code to print the total number of prize categories
let num_categories = (nobel_prize.length)
console.log(`The total number of 2017 Noble Prize categories were: ${num_categories}`)

// TODO write code to count the total number of laureates from 2017.
let num_laureates = nobel_prize[0].laureates.length + nobel_prize[1].laureates.length + nobel_prize[2].laureates.length + nobel_prize[3].laureates.length + nobel_prize[4].laureates.length + nobel_prize[5].laureates.length
console.log(`The total number of 2017 Noble Prize laureates were: ${num_laureates}`)


// for (let i=0; i< nobel_prize.length; i++) {
//     for (let k in nobel_prize[i].category) {
//         for (let j = 0; j < nobel_prize[i].category[k].length; j++) {
//             console.log(nobel_prize[i].category[k][j])
//         }
//     }
// }

let name = nobel_prize
for (let i = 0; i < name.length; i= i+1){
    console.log(name[i].category)
}

let physics_laureates_ids = nobel_prize[0].laureates
for (let i = 0; i < physics_laureates_ids.length; i++){
    console.log(`The #${i+1} id for the 2017 nobel prize winner for physics was: ${physics_laureates_ids[i].id}`)
}

