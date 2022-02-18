let timeLeftDisplay = document.querySelector("#time-left")
let resultDisplay = document.querySelector("#result")
let startPauseButton = document.querySelector("#start-pause-button")
let squares = document.querySelectorAll(".grid div")
console.log(squares) // squares is essentially an array of all the divs/gridboxes that I created in the html 

let currentIndex = 76 // that is where the starting block falls in the index array
let width = 9 // the width of the grid i.e. 9 squares

function moveFrog(e) { // passing through the event into our function

switch(e.key) { // we are getting the key of the event
    case "ArrowLeft" : 
    console.log("move left")
    currentIndex -= 1
    break

    case "ArrowRight" : 
    console.log("move right")
    currentIndex += 1
    break

    case "ArrowUp" : 
    console.log("move up")
    currentIndex -= width // taking 76 - 9 giving us 67 which is the grid div directly above the starting div
    break

    case "ArrowDown" : 
    console.log("move down")
    currentIndex += width
    break
}

    squares[currentIndex].classList.add("frog") // I'm saying look at the 1st index in the squares array and add the class of frog to it which gives it the styling that I created in css
}
document.addEventListener("keyup", moveFrog)