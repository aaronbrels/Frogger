let timeLeftDisplay = document.querySelector("#time-left")
let resultDisplay = document.querySelector("#result")
let startPauseButton = document.querySelector("#start-pause-button")
let squares = document.querySelectorAll(".grid div")
console.log(squares) // squares is essentially an array of all the divs/gridboxes that I created in the html 

let currentIndex = 76 // that is where the starting block falls in the index array
let width = 9 // the width of the grid i.e. 9 squares

function moveFrog(e) { // passing through the event into our function
    squares[currentIndex].classList.remove("frog") // removes the frog from its current index, this makes it so that there is a trail of green boxes when moving the frog


switch(e.key) { // we are getting the key of the event
    case "ArrowLeft" : 
    if(currentIndex % width !== 0) currentIndex -= 1 // see text file
    break

    case "ArrowRight" : 
    if(currentIndex % width < width - 1) currentIndex += 1
    break

    case "ArrowUp" : 
    if(currentIndex - width >= 0) currentIndex -= width // taking 76 - 9 giving us 67 which is the grid div directly above the starting div
    break

    case "ArrowDown" : 
    if(currentIndex + width < width * width)currentIndex += width
    break
}

    squares[currentIndex].classList.add("frog") // I'm saying look at the 1st index in the squares array and add the class of frog to it which gives it the styling that I created in css
}
document.addEventListener("keyup", moveFrog)