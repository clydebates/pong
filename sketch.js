let playerPaddle;
let aiPaddle;
let ball;
const context = canvas.getContext('2d');

function setup() {
    createCanvas(624, 351);
    playerPaddle = new Paddle(26);
    aiPaddle = new Paddle(width - 48)
    ball = new Ball();
}

function draw() {
    background(0);
    playerPaddle.display();
    aiPaddle.display();

    playerPaddle.update();
    aiPaddle.update();
    processAI();


    ball.update();
    ball.display();
    ball.hasHitPlayer(playerPaddle);
    ball.hasHitAi(aiPaddle);

    stroke(255);
    line(width / 2, 0, width / 2, height)
    textSize(60);
    text(ball.aiScore, width / 2 + 30, height - (height - 60));
    text(ball.playerScore, width / 2 - 60, height - (height - 60));

    if (ball.aiWin) {
        background(0);
        textSize(60);
        text("YOU LOSE :(", width/4 - 30, height/2)
    } else if (ball.playerWin) {
        background(0);
        textSize(60);
        text("YOU WIN! :D", width/4 - 30, height/2)
    }
}

function processAI() {
    let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;
    if (middleOfPaddle > ball.y) {
        aiPaddle.isUp = true;
        aiPaddle.isDown = false;
        aiPaddle.up();
    } else {
        aiPaddle.isUp = false;
        aiPaddle.isDown = true;
        aiPaddle.down();
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        playerPaddle.isUp = true;
    } else if (keyCode === DOWN_ARROW) {
        playerPaddle.isDown = true;
    }
}

function keyReleased() {
    if (keyCode === UP_ARROW) {
        playerPaddle.isUp = false;
    } else if (keyCode === DOWN_ARROW) {
        playerPaddle.isDown = false;
    }
}