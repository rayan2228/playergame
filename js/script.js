(function () {
    let inputElm = document.querySelector("#number")
    let fromElm = document.querySelector("form")
    let winningScoreElm = document.querySelector(".winningscore")
    let p1Elm = document.querySelector(".player1")
    let p2Elm = document.querySelector(".player2")
    let p1ScoreElm = document.querySelector(".playeronescore")
    let p2ScoreElm = document.querySelector(".playertwoscore")
    let resetElm = document.querySelector(".reset")
    let winningPlayer = document.querySelector(".winningplayer")
    // data layer
    let winningScore = 50
    let p1Score = 0
    let p2Score = 0
    let turn = "player1"
    // generate random number
    let randomNumber = function randomNumber() {
        return Math.ceil(Math.random() * 10)
    }


    winningScoreElm.textContent = winningScore
    p1ScoreElm.textContent = p1Score
    p2ScoreElm.textContent = p2Score

    // Change winning score
    fromElm.addEventListener("submit", e => {
        e.preventDefault()
        if (Number(inputElm.value) < 1) {
            winningPlayer.innerHTML = "Invalid Number"
            inputElm.value = ""
            p1Elm.setAttribute("disabled", "disabled")
            p2Elm.setAttribute("disabled", "disabled")
            p1Score = 0
            p2Score = 0
            p1ScoreElm.textContent = p1Score
            p2ScoreElm.textContent = p2Score
        } else {
            winningScore = Number(inputElm.value)
            winningScoreElm.textContent = winningScore
            inputElm.value = ""
            defaultStage()
        }
    })

    // increase player score
    p1Elm.addEventListener("click", e => {
        if (turn === "player1") {
            p1Score += randomNumber()
            p1ScoreElm.textContent = p1Score
            turn = "player2"
            p1Elm.setAttribute("disabled", "disabled")
            p2Elm.removeAttribute("disabled")
            checkWinner()
        }

    })
    p2Elm.addEventListener("click", e => {
        if (turn === "player2") {
            p2Score += randomNumber()
            p2ScoreElm.textContent = p2Score
            turn = "player1"
            p2Elm.setAttribute("disabled", "disabled")
            p1Elm.removeAttribute("disabled")
            checkWinner()
        }
    })
    // winning player 
    function checkWinner() {
        let p1 = winningScore <= p1Score
        let p2 = winningScore <= p2Score
        if (p1 || p2) {
            p1Elm.setAttribute("disabled", "disabled")
            p2Elm.setAttribute("disabled", "disabled")
        }
        winnerResult(p1, p2)
    }
    function winnerResult(p1, p2) {
        if (p1) {
            winningPlayer.innerHTML = "Player One  <b> WINNER </b>"
        } else if (p2) {
            winningPlayer.innerHTML = "Player Two  <b> WINNER </b>"
        }
    }
    // reset button
    resetElm.addEventListener("click", e => {
        winningScore = 50
        defaultStage()
    })
    // Back to Default Stage
    function defaultStage() {
        p1Score = 0
        p2Score = 0
        turn = "player1"
        winningScoreElm.textContent = winningScore
        p1ScoreElm.textContent = p1Score
        p2ScoreElm.textContent = p2Score
        p1Elm.removeAttribute("disabled")
        p2Elm.removeAttribute("disabled")
        winningPlayer.innerHTML = ""
    }
})()

