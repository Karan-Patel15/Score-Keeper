let playerOneScore = 0;
let playerTwoScore = 0;
let playUntil = 0;
let gameOver = false;
const buttonP1 = document.querySelector("#addPlayer1");
const buttonP2 = document.querySelector("#addPlayer2");
const p1Span = document.querySelector("#p1Header");
const p2Span = document.querySelector("#p2Header");
const reset = document.querySelector("#reset");
const dropdown = document.querySelector("#dropdown");

buttonP1.addEventListener("click", function(e) {
    if (!gameOver) {
        if (playerOneScore < playUntil) {
            playerOneScore++;
            p1Header.innerText = `${playerOneScore}`;
        } 
        if (playerOneScore === playUntil) {
            gameOver = true;
            p1Span.style.color = "green";
        }
    }
    
    
})

buttonP2.addEventListener("click", function(e) {
    if (!gameOver) {
        if (playerTwoScore < playUntil) {
            playerTwoScore++;
            p2Header.innerText = `${playerTwoScore}`;
        }
        if (playerTwoScore === playUntil) {
            gameOver = true;
            p2Span.style.color = "green";
        }
    }
    
    
})

dropdown.addEventListener("change", function(e) {
    playUntil = parseInt(dropdown.value);
})

reset.addEventListener("click", function(e) {
    playUntil = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    gameOver = false;
});