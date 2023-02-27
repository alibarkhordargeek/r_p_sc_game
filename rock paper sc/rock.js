const types = [ "rock", "paper", "scissors" ]

var score = [ 0, 0 ]
const result = document.getElementById("resultpro")
const result2 = document.getElementById("result2")
const playerScore = document.getElementById("playerscore")
const computerScore = document.getElementById("computerscore")

const rock = function() {
    document.getElementById("rock").disabled = true
    let rand = Math.floor(Math.random() * 3)
    let computer = types[rand]
    if (computer === "rock") {
        result.innerHTML = "equal..."
        result2.innerHTML = computer
    } else if (computer === "paper") {
        score[1] ++
        result.innerHTML = "you lost :("
        result2.innerHTML = computer
        computerScore.innerHTML = "computer score is : " + score[1]
    } else {
        result.innerHTML = "you won!! :)"
        result2.innerHTML = computer
        score[0] ++
        playerScore.innerHTML = "your score is : " + score[0]
    }
    document.getElementById("rock").disabled = false
}
const paper = function() {
    document.getElementById("paper").disabled = true
    let rand = Math.floor(Math.random() * 3)
    let computer = types[rand]
    if (computer === "paper") {
        result.innerHTML = "equal..."
        result2.innerHTML = computer
    } else if (computer === "scissors") {
        score[1] ++
        result.innerHTML = "you lost :("
        result2.innerHTML = computer
        computerScore.innerHTML = "computer score is : " + score[1]
    } else {
        result.innerHTML = "you won!! :)"
        result2.innerHTML = computer
        score[0] ++
        playerScore.innerHTML = "your score is : " + score[0]
    }
    document.getElementById("paper").disabled = false
}
const scissors = function() {
    document.getElementById("scissors").disabled = true
    let rand = Math.floor(Math.random() * 3)
    let computer = types[rand]
    if (computer === "scissors") {
        result.innerHTML = "equal..."
        result2.innerHTML = computer
    } else if (computer === "rock") {
        score[1] ++
        result.innerHTML = "you lost :("
        result2.innerHTML = computer
        computerScore.innerHTML = "computer score is : " + score[1]
    } else {
        result.innerHTML = "you won!! :)"
        result2.innerHTML = computer
        score[0] ++
        playerScore.innerHTML = "your score is : " + score[0]
    }
    document.getElementById("scissors").disabled = false
}