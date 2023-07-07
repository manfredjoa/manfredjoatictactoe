const sections = document.querySelectorAll("section")
const button = document.querySelector("button")
let red = []
let blue = []

console.log("New game, red's turn!")

let count = 1
let win = 0

sections.forEach(section => {
  section.addEventListener("click", () => {
    if (win > 0) {
      return
    }

    if (count % 2 === 1) {
      section.classList.add('red')
      section.innerText = "X"
      section.classList.add('noClick')
      count++
      red.push(section.dataset.number)
      check()

      if (red.length < 5 && win === 0) {
        console.log("Blue's turn!")
      }

    } else {
      section.classList.add('blue')
      section.innerText = "O"
      section.classList.add('noClick')
      count++
      blue.push(section.dataset.number)
      check()

      if (win === 0) {
        console.log("Red's turn!")
      }
    }
  })
})


const redScore = document.querySelector("#redScore")
const blueScore = document.querySelector("#blueScore")
const redWins = document.querySelector("#redWins")
const blueWins = document.querySelector("#blueWins")
const tie = document.querySelector("#tie")
const gameEnd = document.querySelector("#gameEnd")
let redScoreCount = 0
let blueScoreCount = 0

function check() {

  if (red.includes('0') && red.includes('1') && red.includes('2')) {
    console.log("Red wins!")
    win++
    redScore.innerText = redScoreCount += 1
    redWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (red.includes('3') && red.includes('4') && red.includes('5')) {
    console.log("Red wins!")
    win++
    redScore.innerText = redScoreCount += 1
    redWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (red.includes('6') && red.includes('7') && red.includes('8')) {
    console.log("Red wins!")
    win++
    redScore.innerText = redScoreCount += 1
    redWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (red.includes('0') && red.includes('3') && red.includes('6')) {
    console.log("Red wins!")
    win++
    redScore.innerText = redScoreCount += 1
    redWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (red.includes('1') && red.includes('4') && red.includes('7')) {
    console.log("Red wins!")
    win++
    redScore.innerText = redScoreCount += 1
    redWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (red.includes('2') && red.includes('5') && red.includes('8')) {
    console.log("Red wins!")
    win++
    redScore.innerText = redScoreCount += 1
    redWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (red.includes('0') && red.includes('4') && red.includes('8')) {
    console.log("Red wins!")
    win++
    redScore.innerText = redScoreCount += 1
    redWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (red.includes('2') && red.includes('4') && red.includes('6')) {
    console.log("Red wins!")
    win++
    redScore.innerText = redScoreCount += 1
    redWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (red.length === 5 && blue.length === 4) {
    console.log("It's a tie!")
    win++
    tie.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")


  } else if (blue.includes('0') && blue.includes('1') && blue.includes('2')) {
    console.log("Blue wins!")
    win++
    blueScore.innerText = blueScoreCount += 1
    blueWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (blue.includes('3') && blue.includes('4') && blue.includes('5')) {
    console.log("Blue wins!")
    win++
    blueScore.innerText = blueScoreCount += 1
    blueWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (blue.includes('6') && blue.includes('7') && blue.includes('8')) {
    console.log("Blue wins!")
    win++
    blueScore.innerText = blueScoreCount += 1
    blueWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (blue.includes('0') && blue.includes('3') && blue.includes('6')) {
    console.log("Blue wins!")
    win++
    blueScore.innerText = blueScoreCount += 1
    blueWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (blue.includes('1') && blue.includes('4') && blue.includes('7')) {
    console.log("Blue wins!")
    win++
    blueScore.innerText = blueScoreCount += 1
    blueWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (blue.includes('2') && blue.includes('5') && blue.includes('8')) {
    console.log("Blue wins!")
    win++
    blueScore.innerText = blueScoreCount += 1
    blueWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (blue.includes('0') && blue.includes('4') && blue.includes('8')) {
    console.log("Blue wins!")
    win++
    blueScore.innerText = blueScoreCount += 1
    blueWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")

  } else if (blue.includes('2') && blue.includes('4') && blue.includes('6')) {
    console.log("Blue wins!")
    win++
    blueScore.innerText = blueScoreCount += 1
    blueWins.classList.remove("hidden")
    gameEnd.classList.add("gameEnd")
  }
}


button.addEventListener("click", () => {
  sections.forEach(section => {
    section.classList.remove("red")
    section.classList.remove("blue")
    section.classList.remove("noClick")
    section.innerText = ''
    count = 1
    win = 0
    red = []
    blue = []
  })
  redWins.classList.add("hidden")
  blueWins.classList.add("hidden")
  tie.classList.add("hidden")
  gameEnd.classList.remove("gameEnd")
  console.log("New game, red's turn!")
})