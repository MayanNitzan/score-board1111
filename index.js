let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0
let gScore = 0
let homeContainer = document.getElementById("home-container")
let guestContainer = document.getElementById("guest-container")

function plus1Home() {
    hScore += 1
    homeScore.textContent = hScore
    leaderHighlight()
}

function plus2Home() {
    hScore += 2
    homeScore.textContent = hScore
    leaderHighlight()   
} 

function plus3Home() {
    hScore += 3
    homeScore.textContent = hScore
    leaderHighlight()
}

function plus1Guest() {
    gScore += 1
    guestScore.textContent = gScore
    leaderHighlight()
}

function plus2Guest() {
    gScore += 2
    guestScore.textContent = gScore
    leaderHighlight()
}

function plus3Guest() {
    gScore += 3
    guestScore.textContent = gScore
    leaderHighlight()
}

function resetGame() {
    hScore = 0
    gScore = 0
    homeScore.textContent = hScore
    guestScore.textContent = gScore
    leaderHighlight()
}

function leaderHighlight() {
    homeContainer.style.border = ""
    guestContainer.style.border = ""

    if (hScore > gScore) {
        homeContainer.style.border = "3px solid #724319"
    } else if (gScore > hScore) {
        guestContainer.style.border = "3px solid #724319"
    }
}