const gameOver = result =>
    console.log(`Game Over - ${result}`)

const stillRolling = (message, currentPoint) =>
    console.log(`${message} - try again for ${currentPoint}`)

const craps = (roll, point) => new Promise((gameOver, rollAgain) => {
    if (!roll || typeof roll !== "number"  || roll < 2 || roll > 12) {
        rollAgain("to roll a number")
    } else if (!point) {
        if (roll === 7 || roll === 11) {
            gameOver("You win by natural")
        } else if (roll === 2 || roll === 3) {
            gameOver("You lose, crapped out")
        } else {
            rollAgain(roll)
        }
    } else if (roll === point) {
        gameOver("You win, you hit the point!")
    } else {
        if (roll === 7) {
            gameOver("You lose, craps")
        } else {
            rollAgain(point)
        }
    }
})

craps(7).then(gameOver, stillRolling)
craps(2).then(gameOver, stillRolling)
craps(8).then(gameOver, stillRolling)

craps(5,8).then(gameOver, stillRolling)
craps(7,8).then(gameOver, stillRolling)
craps(8,8).then(gameOver, stillRolling)