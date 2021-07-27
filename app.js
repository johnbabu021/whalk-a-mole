const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const playAgainBtn = document.querySelector('button')
let ongoing = false
let result = 0
let hitposition = null
let currentTime = timeLeft.textContent
let gameEnd = false
playAgainBtn.style.display = 'none'
playAgainBtn.addEventListener("click", playAgain)
function playAgain() {
    gameEnd = false
    currentTime = 10
    timerId = setInterval(countDown, 1000)
}

function randomSquare() {
    square.forEach(square => {
        square.classList.remove('mole')
    })
    if (gameEnd) {
        return null

    }
    else {

        let randomPosition = square[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole')
        hitposition = randomPosition.id
    }




}



square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitposition) {
            result = result + 1;
            score.textContent = result;
        }

    })
})
function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000)



}
moveMole()

function countDown() {
    ongoing = true
    if (ongoing) {
        playAgainBtn.style.display = 'none'

    }
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        score.textContent = 0
        gameEnd = true
        clearInterval(timerId)
        playAgainBtn.style.display = 'block'

        alert("GAME IS OVER YOUR RESULT IS " + result)
    }
}

let timerId = setInterval(countDown, 1000)


