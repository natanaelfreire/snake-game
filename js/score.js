import { score, highScore } from './main.js';

var countScore = 0;
var countHighScore = JSON.parse(localStorage.getItem('player_snake')) || 0;

function initScore() {
  score.innerHTML = `SCORE: ${countScore}`;
  highScore.innerHTML = `HIGH SCORE: ${countHighScore}`;
}

function setScore() {
  countScore += 10;
  score.innerHTML = `SCORE: ${countScore}`;
}

function resetScore() {
  if (countHighScore == 0 || countScore > countHighScore) {
    localStorage.setItem('player_snake', JSON.stringify(countScore));
    countHighScore = countScore;
  }

  countScore = 0;
  score.innerHTML = `SCORE: ${countScore}`;
  highScore.innerHTML = `HIGH SCORE: ${countHighScore}`;
}

export { initScore, setScore, resetScore};