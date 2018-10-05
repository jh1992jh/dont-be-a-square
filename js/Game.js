class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.canvasContext = this.canvas.getContext('2d')
        
        
    }

    drawGameArea(leftX, topY, width, height, gradient) {
            gradient = this.canvasContext.createLinearGradient(100, 3000, 300, 30);
            gradient.addColorStop(0, '#ff3399');
            gradient.addColorStop(1, 'white');
            this.canvasContext.fillStyle = gradient;
            this.canvasContext.fillRect(leftX, topY, width, height)
    }

    showGameLost() {
        if(gameLost === true && showGameLostChoice === false) {
            this.canvasContext.font = '50px Arial'
            const gradient = this.canvasContext.createLinearGradient(0,0,this.canvas.width,0);
            gradient.addColorStop("0","magenta");
            gradient.addColorStop("1.0","pink");
            this.canvasContext.strokeStyle = gradient;
            this.canvasContext.strokeText(`You lost, Score: ${score}`, 194, 200)
            this.gameLostChoice();
        } else if (gameLost === true && showGameLostChoice === true) {
            return;
        }
    }

    updateScore() {
        score += 10;
        if(enemyTwo === false && score === 100) {
            document.getElementById('log').innerHTML += `<p> A new enemy just entered the game</p>`
        } else if (enemyThree === false && score === 200) {
            document.getElementById('log').innerHTML += `<p> A new enemy just entered the game</p>`
        } else if (enemyFour === false && score === 300) {
            document.getElementById('log').innerHTML += `<p> A new enemy just entered the game</p>`
        } else if (enemyFive === false && score === 500) {
            document.getElementById('log').innerHTML += `<p> A new enemy just entered the game</p>`
        }  else if (score === 1000 && enemyXSpeed === 3) {
            enemyXSpeed = 5;
            enemyYSpeed = 5;
            document.getElementById('log').innerHTML += `<p> The Enemy just became faster</p>`
        }

    }

    drawScore() {
        this.canvasContext.font = '30px Arial'
        const gradient = this.canvasContext.createLinearGradient(0,0,this.canvas.width,0);
gradient.addColorStop("0","magenta");
gradient.addColorStop("0.5","blue");
gradient.addColorStop("1.0","red");
this.canvasContext.strokeStyle = gradient;
this.canvasContext.strokeText(`Score: ${score}`, 10, 30)
    }

    ballControl() {
        if(enemyX >= canvas.width) {
            enemyX -= 5;
        } else if (enemyX <= 0) {
            enemyX += 5;
        } else if (enemyY >= canvas.height) {
            enemyY -=5;
        } else if (enemyY <= 0) {
            enemyY += 5;
        }
    
    
        if(ballX >= canvas.width) {
            ballX -= 5;
        } else if (ballX <= 0) {
            ballX += 5;
        } else if (ballY >= canvas.height) {
            ballY -=5;
        } else if (ballY <= 0) {
            ballY += 5;
        }  
    }

    checkGameLost() {
            const lostArr = [0,1,2,3,4]
            const lostArrTwoY = [-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,6,7,8,9,10,11,12,13,14,15]
            const lostArrTwoX = [-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,6,7,8,9,10,11,12,13,14,15]
            if(ballX === enemyX && ballY === enemyY) {
            gameLost = true;       
            
            } else if (lostArr.includes(ballX - enemyX) && lostArr.includes(ballY - enemyY)) {
                gameLost = true;
        }   else if (lostArrTwoX.includes(ballX - enemyTwoX) && lostArrTwoY.includes(ballY - enemyTwoY) && enemyTwo === true) {
            gameLost = true;
          } else if (lostArrTwoX.includes(ballX - enemyThreeX) && lostArrTwoY.includes(ballY - enemyThreeY) && enemyThree === true) {
            gameLost = true;
          } else if (lostArrTwoX.includes(ballX - enemyFourX) && lostArrTwoY.includes(ballY - enemyFourY) && enemyFour === true) {
            gameLost = true;
          } else if (lostArrTwoX.includes(ballX - enemyFiveX) && lostArrTwoY.includes(ballY - enemyFiveY) && enemyFive === true) {
            gameLost = true;
          }
          
    }

    gameLostChoice() {
        if(gameLost === true) {
            
            const prevScore = localStorage.getItem('score');

            console.log(score > prevScore)
            if(score > prevScore) {
            localStorage.setItem('score', score);
            }

            const div = document.createElement('div');
            div.className = 'gameLostChoice';
            
            document.getElementById('gameBody').appendChild(div);
            div.innerHTML = `
            <h3 id="restart">Restart</h3>
            <a href="submit-highscore.html"><h3>Highscore</h3></a>
            <a href="index.html"><h3>Main menu</h3></a>
            `
            showGameLostChoice = true;
        }
    }

    restartGame(e) {
        if(e.target.parentElement.classList.contains('gameLostChoice')) {
         ballX = 380;
         ballY = 280;
         enemyX = 100;
         enemyY = 100;
         enemyXSpeed = 3;
         enemyYSpeed = 3;
         enemyTwo = false;
         enemyTwoX = 200;
         enemyTwoY = 300;
         enemyThree = false;
         enemyThreeX = 100;
         enemyThreeY = 100;
         enemyFour = false;
         enemyFourX = 600;
         enemyFourY = 300;
         enemyFive = false;
         enemyFiveX = 700;
         enemyFiveY = 500;
         score = 0;
         gameLost = false;
         showGameLostChoice = false;
         e.target.parentElement.remove();
         document.getElementById('log').innerHTML = `<h3>Log:</h3>`;
        } 
    }
}