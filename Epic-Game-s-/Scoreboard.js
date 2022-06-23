
let choices = ["Schere", "Stein", "Papier"]

function pick(choice) {
    // Choose random weapon from choices
    const randomChoice = Math.floor(Math.random() * choices.length)
    const computerPick = choices[randomChoice]

    console.log(choice)
    console.log(choice, computerPick)
    if (choice == computerPick) {
        console.log("unentschieden")
    }

    if (choice == choices[0]) {
        
        } if (computerPick == choices[1]) {
            console.log('u lus')

        } if (choice == choices[0]) 
        
        {    if (computerPick == choice[2]) {
                console.log('u ween')
            }
        }
    }







// function pick(){
//     console.log("Stein")
// }

// function pick2(){
//     console.log("Papier")
// }