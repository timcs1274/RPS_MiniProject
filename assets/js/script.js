alert("R = Rock P = Paper S = Scissors");
var playerInput = prompt("Input your choice here: ");
var R = 0;
var P = 1;
var S = 2;

//0=R 1=P 2=S
var computerInput = math.random() * 2;

var win = 0;
var lose = 0;
var tie = 0;

if (playerInput === "R" && computerInput === 0){
    tie ++;
    alert("You've tied!");
} else if (playerInput === "R" && computerInput === 1){
    lose ++;
    alert("Paper beats rock, you lose!");
} else if (playerInput === "R" && computerInput === 2){
    win ++;
    alert("Rock beats scissors, you win!");
} else if (playerInput === "P" && computerInput === 0){
    win ++;
    alert("Paper beats rock, you win!");
} else if (playerInput === "P" && computerInput === 1){
    tie ++;
    alert("You've tied!");
} else if (playerInput === "P" && computerInput === 2){
    lose ++;
    alert("Scissors beats paper, you lose!");
} else if (playerInput === "S" && computerInput === 0){
    lose ++;
    alert("Rock beats scissors, you lose!");
} else if (playerInput === "S" && computerInput === 1){
    win ++;
    alert("Scissors beats paper, you win!");
} else if (playerInput === "S" && computerInput === 2){
    tie ++;
    alert("You've tied!");
} else {
    alert("Invalid input");
}