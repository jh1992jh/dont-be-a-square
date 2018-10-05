const game = new Game;
const enemy = new Enemy;
const player = new Player;

let ballX = 380;
let ballY = 280;

let enemyX = 100;
let enemyY = 100;

let enemyXSpeed = 3;
let enemyYSpeed = 3;

let enemyTwo = false;
let enemyTwoX = 200;
let enemyTwoY = 300;

let enemyThree = false;
let enemyThreeX = 100;
let enemyThreeY = 100;

let enemyFour = false;
let enemyFourX = 600;
let enemyFourY = 300;

let enemyFive = false;
let enemyFiveX = 700;
let enemyFiveY = 500;

let score = 0;

let gameLost = false;
let showGameLostChoice = false;

let turbo = false;

let intervalSpeed = 30

window.onload = () => {
const body = document.getElementById('gameBody');
body.addEventListener('click', game.restartGame)
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');

setInterval (drawEverything, intervalSpeed);
setInterval(() => {
    if(gameLost === false) {
        game.updateScore()
    }
},1000)
}


const drawEverything = () => {

    if(gameLost === false) {
    game.drawGameArea(0, 0, canvas.width, canvas.height);
    player.drawPlayer(ballX, ballY,20, '#dd1177')
    enemy.drawEnemy(enemyX, enemyY, 20, 20, '#1a1aff')
    enemy.moveEnemy();
    game.ballControl();
    game.drawScore();
    game.checkGameLost();
    
        if(score >= 100) {
            enemy.drawEnemyTwo(enemyTwoX, enemyTwoY, 20, 20, '#1a1aff');
            enemy.moveEnemyTwo();
            enemy.checkEnemyTwo();
        }

        if(score >= 200) {
            enemy.drawEnemyThree(enemyThreeX, enemyThreeY, 20, 20, '#1a1aff');
            enemy.moveEnemyThree();
            enemy.checkEnemyThree();
        }

        if(score >= 300) {
            enemy.drawEnemyFour(enemyFourX, enemyFourY, 20, 20, '#1a1aff');
            enemy.moveEnemyFour();
            enemy.checkEnemyFour();
        }

        if(score >= 500) {
            enemy.drawEnemyFive(enemyFiveX, enemyFiveY, 20, 20, '#1a1aff');
            enemy.moveEnemyFive();
            enemy.checkEnemyFive();
        }
    } else {
        game.showGameLost();
    }
    
    
}

