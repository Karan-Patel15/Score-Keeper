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

buttonP1.addEventListener("click", function (e) {
    if (!gameOver) {
        if (playerOneScore < playUntil) {
            playerOneScore++;
            p1Span.innerText = `${playerOneScore}`;
        }
        if (playerOneScore === playUntil) {
            gameOver = true;
            p1Span.classList.add("win");
            p2Span.classList.add("lose");
        }
    }


})

buttonP2.addEventListener("click", function (e) {
    if (!gameOver) {
        if (playerTwoScore < playUntil) {
            playerTwoScore++;
            p2Span.innerText = `${playerTwoScore}`;
        }
        if (playerTwoScore === playUntil) {
            gameOver = true;
            p2Span.classList.add("win");
            p1Span.classList.add("lose");
        }
    }


})

dropdown.addEventListener("change", function (e) {
    playUntil = parseInt(dropdown.value);
})

reset.addEventListener("click", function (e) {
    playUntil = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    gameOver = false;
    p1Span.innerText = "0";
    p2Span.innerText = "0";
    p1Span.classList.remove("win", "lose");
    p2Span.classList.remove("win", "lose");
});