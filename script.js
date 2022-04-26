'use strict'
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.btn-check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //when there is no number
    if (!guess) {
        document.querySelector('.massage').textContent = '⛔ No Number';
    }
    // when player wins
    else if (guess === secretNumber) {
        document.querySelector('.massage').textContent = '🎉 Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        if (highScore < score) {
            document.querySelector('.highscore').textContent = `${score}`
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
    //when player guesses higher number
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.massage').textContent = ' 📈 Too High';
            score--;
            document.querySelector('.score').textContent = `💯 Score: ${score}`;
        }
        else {
            document.querySelector('.massage').textContent = '💥😑You lost the Game!';
            document.querySelector('.score').textContent = '💯 Score:' + 0;
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
    //when player guesses lower number
    else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.massage').textContent = ' 📉 Too Low';
            score--;
            document.querySelector('.score').textContent = `💯 Score: ${score}`;
        }
        else {
            document.querySelector('.massage').textContent = '💥😑You lost the Game!';
            document.querySelector('.score').textContent = '💯 Score:' + 0;
            document.querySelector('body').style.backgroundColor = 'red'
        }
    }
});
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.massage').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = `💯 Score: ${score}`;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
});