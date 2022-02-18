let timeLeftDisplay = document.querySelector("#time-left")
let resultDisplay = document.querySelector("#result")
let startPauseButton = document.querySelector("#start-pause-button")
let squares = document.querySelectorAll(".grid div")
let logsLeft = document.querySelectorAll(".log-left")
let logsRight = document.querySelectorAll(".log-right")
let carsLeft = document.querySelectorAll(".car-left")
let carsRight = document.querySelectorAll(".car-right")
console.log(squares) // squares is essentially an array of all the divs/gridboxes that I created in the html 

let currentIndex = 76 // that is where the starting block falls in the index array
let width = 9 // the width of the grid i.e. 9 squares
let timerId 

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


function autoMove() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft)) // look into forEach
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
    lose()
}


function moveLogLeft(logLeft) {
    switch(true) { // if the first case is true ???
      case logLeft.classList.contains("l1"):
        logLeft.classList.remove("l1")
        logLeft.classList.add("l2")
        break
      case logLeft.classList.contains("l2"):
         logLeft.classList.remove("l2")
         logLeft.classList.add("l3")
        break
      case logLeft.classList.contains("l3"):
           logLeft.classList.remove("l3")
           logLeft.classList.add("l4")
        break
      case logLeft.classList.contains("l4"):
           logLeft.classList.remove("l4")
           logLeft.classList.add("l5")
        break
      case logLeft.classList.contains("l5"):
           logLeft.classList.remove("l5")
           logLeft.classList.add("l1")
        break
    }
}

function moveLogRight(logRight) {
  switch(true) { //
    case logRight.classList.contains("l1"):
      logRight.classList.remove("l1")
      logRight.classList.add("l5") // in order to go the opposite way, go in reverse 1 to 5, 2 to 1, 3 to 2 etc.
      break
    case logRight.classList.contains("l2"):
       logRight.classList.remove("l2")
       logRight.classList.add("l1")
      break
    case logRight.classList.contains("l3"):
         logRight.classList.remove("l3")
         logRight.classList.add("l2")
      break
    case logRight.classList.contains("l4"):
         logRight.classList.remove("l4")
         logRight.classList.add("l3")
      break
    case logRight.classList.contains("l5"):
         logRight.classList.remove("l5")
         logRight.classList.add("l4")
      break
  }
}

function moveCarLeft(carLeft) {
  switch(true) { // if the first case is true ???
    case carLeft.classList.contains("c1"):
      carLeft.classList.remove("c1")
      carLeft.classList.add("c2")
      break
    case carLeft.classList.contains("c2"):
       carLeft.classList.remove("c2")
       carLeft.classList.add("c3")
      break
    case carLeft.classList.contains("c3"):
         carLeft.classList.remove("c3")
         carLeft.classList.add("c1")
      break
  }
}

function moveCarRight(carRight) {
  switch(true) { // if the first case is true ???
    case carRight.classList.contains("c1"):
      carRight.classList.remove("c1")
      carRight.classList.add("c3")
      break
    case carRight.classList.contains("c2"):
       carRight.classList.remove("c2")
       carRight.classList.add("c1")
      break
    case carRight.classList.contains("c3"):
         carRight.classList.remove("c3")
         carRight.classList.add("c2")
      break
  }
}

function lose() {
  if(squares[currentIndex].classList.contains("c1") || 
     squares[currentIndex].classList.contains("l4") ||
     squares[currentIndex].classList.contains("l5") 
  ) {
    resultDisplay.textContent = "You Lose!"
    clearInterval(timerId) // stops the interval
    squares[currentIndex].classList.remove("frog")
    document.removeEventListener("keyup", moveFrog)
  }
}

timerId = setInterval(autoMove, 1000)
