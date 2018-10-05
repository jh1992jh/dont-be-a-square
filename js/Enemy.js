class Enemy extends Game {
    constructor(canvasContext, canvas) {
        super(canvasContext, canvas) 
            this.enemyX = 100;
            this.enemyY = 100;
            this.goUpETwo = true;
            this.goDownETwo = false;
            this.goLeftEThree = true;
            this.goRightEThree = false;
            this.goUpEFour = true;
            this.goDownEFour = false;
            this.goLeftEFive = true;
            this.goRightEFive = false;
    }

    drawEnemy(leftX, topY, width, height, drawColor)  {
        /* canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height)
        canvasContext.fill();*/
        const image = new Image();
        image.src = 'images/Cherryblossoms.jpg'
        canvasContext.drawImage(image, leftX, topY, 40, 40)
    }

    drawEnemyTwo(leftX, topY, width, height, drawColor)  {
         canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height)
        canvasContext.fill(); 
        /*const image = new Image();
        image.src = 'Candy.jpg'
        canvasContext.drawImage(image, leftX, topY, width, height)*/

    }

    drawEnemyThree(leftX, topY, width, height, drawColor)  {
        /* canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height)
        canvasContext.fill(); */
        const image = new Image();
        image.src = 'images/Bourbon.jpg'
        canvasContext.drawImage(image, leftX, topY, width, height)
    }

    drawEnemyFour(leftX, topY, width, height, drawColor)  {
        /* canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height)
        canvasContext.fill(); */
        const image = new Image();
        image.src = 'images/Candy.jpg'
        canvasContext.drawImage(image, leftX, topY, width, height)
    }

    drawEnemyFive(leftX, topY, width, height, drawColor)  {
       /* canvasContext.fillStyle = drawColor;
        canvasContext.fillRect(leftX, topY, width, height)
        canvasContext.fill(); */
        const image = new Image();
        image.src = 'images/Bourbon.jpg'
        canvasContext.drawImage(image, leftX, topY, width, height)
    }

    moveEnemy() {
        if (enemyX < ballX && enemyY < ballY )  {
            enemyY += 2;
            enemyX += 2;
        }
     else if (enemyX > ballX && enemyY > ballY) {
         enemyY -= 2;
         enemyX -= 2;
     } else if (enemyX < ballX) {      
          enemyX += enemyXSpeed;
     } else if (enemyX > ballX) {
        enemyX -= enemyXSpeed;
        
    } else if (enemyY < ballY) {

        if(ballY - enemyY >= 50 && turbo === true) {
        }
        enemyY += enemyYSpeed;
     } else if (enemyY > ballY) {
        enemyY -= enemyYSpeed; 
    } 
}

checkEnemyTwo() {
    if(score > 100) {
        enemyTwo = true
    }
}

checkEnemyThree() {
    if(score > 200) {
        enemyThree = true
    }
}

checkEnemyFour() {
    if(score > 300) {
        enemyFour = true
    }
}

checkEnemyFive() {
    if(score > 500) {
        enemyFive = true
    }
}

moveEnemyTwo() {
    if(enemyTwo === true) {
        if(this.goUpETwo === true) {
            enemyTwoY += 4;
    
        } else if (this.goDownETwo === true) {
            enemyTwoY -= 4;
        }
        
        if(enemyTwoY >= canvas.height) {
            this.goDownETwo = true;
            this.goUpETwo = false; 
        } else if (enemyTwoY <= 5) {
            this.goDownETwo = false;
            this.goUpETwo = true;
        }
    }
}

moveEnemyThree() {
    if(enemyThree === true) {
        if(this.goRightEThree === true) {
            enemyThreeX += 4;
    
        } else if (this.goLeftEThree === true) {
            enemyThreeX-= 4;
        }
        
        if(enemyThreeX >= canvas.width) {
            this.goLeftEThree = true;
            this.goRightEThree = false; 
        } else if (enemyThreeX <= 5) {
            this.goLeftEThree = false;
            this.goRightEThree = true;
        }
    }
}

moveEnemyFour() {
    if(enemyFour === true) {
        if(this.goUpEFour === true) {
            enemyFourY += 4;
    
        } else if (this.goDownEFour === true) {
            enemyFourY -= 4;
        }
        
        if(enemyFourY >= canvas.height) {
            this.goDownEFour = true;
            this.goUpEFour = false; 
        } else if (enemyFourY <= 5) {
            this.goDownEFour = false;
            this.goUpEFour = true;
        }
    }
}

moveEnemyFive() {
    if(enemyFive === true) {
        if(this.goRightEFive === true) {
            enemyFiveX += 4;
    
        } else if (this.goLeftEFive === true) {
            enemyFiveX-= 4;
        }
        
        if(enemyFiveX >= canvas.width) {
            this.goLeftEFive = true;
            this.goRightEFive = false; 
        } else if (enemyFiveX <= 5) {
            this.goLeftEFive = false;
            this.goRightEFive = true;
        }
    }
}
}