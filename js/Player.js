class Player extends Game {
    constructor(canvasContext, canvas, ballX, ballY) {
        super(canvasContext, canvas, ballX, ballY)
    }

    drawPlayer(ballX, ballY, radius, drawColor)  {
        /* canvasContext.fillStyle = drawColor;
        canvasContext.beginPath();
        canvasContext.arc(ballX, ballY, radius, 0, Math.PI*2, true)
        canvasContext.fill(); */
        const image = new Image();
        image.src = 'images/Reef.jpg'
        canvasContext.drawImage(image, ballX, ballY, 40, 40)
    }

    ballControl() {
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
}

document.addEventListener('keydown', (e) => {
    const keyPressed = e.keyCode;

    switch(keyPressed) {
        case 38:
            ballY -= 5;
            break;
        case 87:
            ballY -= 5;
            break;
        case 40:
            ballY += 5;
            break;
        case 83:
            ballY += 5;
            break;
        case 37: 
            ballX -= 5;
            break;
        case 65: 
            ballX -= 5;
            break;
        case 39: 
            ballX += 5;
            break;
        case 68: 
            ballX += 5;
            break;
    }
})