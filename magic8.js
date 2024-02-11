

let questionTextElement = document.querySelector('#question-text')
let submitButton = document.querySelector('#ask')
let answerDisplayElement = document.querySelector('#answer')

submitButton.addEventListener('click', function() {

//read the text from the questionTextElement and use it to set the value of this variable.
//It will be used in the next line
let question = questionTextElement.value

let eight_ball_url = `https://magic-8-ball-mctc.uc.r.appspot.com/magic/JSON/${question}`
console.log(eight_ball_url)  // for debugging - is the correct URL created?

fetch(eight_ball_url)
.then(response => response.json())
.then(data => {

// data is an object containing the JSON response from the server
console.log(data)
console.log(question)
// Extract the answer from the server's response.
// the response is in the form,

//{
//    "magic": {
//         "answer": "Better not tell you now.",
//         "question": "Will it snow today",
//         "type": "Non-committal"
//     }
// }
//
// So, you need the answer value - note that there's a nested object.
//
// */
//
// Display the message in the answerDisplayElement */





/* Your code goes above this line */


})
    .catch(err => console.log(err))
})


