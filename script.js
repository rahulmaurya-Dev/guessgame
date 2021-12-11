'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 13;

let randomNum = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = randomNum;
let score = 20;
let highscore = 0;
//
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent =
      '❌No Number Select please choose from 1 to 20 ';
  } else if (guess > 20) {
    document.querySelector('.message').textContent = '🛑Seclect less than 20';
  } else if (guess <= -1) {
    document.querySelector('.message').textContent = '🛑Seclect more  than 1';
  } else {
    if (randomNum === guess) {
      document.querySelector('.number').textContent = randomNum;
      document.querySelector('.message').textContent =
        ' 😎😎 wow You guess Correct Number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (highscore < score) {
        document.querySelector('.highscore').textContent = score;
      }
    }

    //wrong guesss
    else if (score >= 1) {
      if (guess > randomNum) {
        document.querySelector('.message').textContent =
          '🔺your guess is too high';
        score--;
        document.querySelector('.score').textContent = score;

        //lost
        if (score < 1) {
          document.querySelector('.message').textContent =
            '🤬You Lost    😡 Go Guess Again';
          document.querySelector('body').style.backgroundColor = '#eb4934';
        }
      } else if (guess < randomNum) {
        document.querySelector('.message').textContent =
          '🔻your guess is too low';
        score--;
        document.querySelector('.score').textContent = score;
        //lost
        if (score < 1) {
          document.querySelector('.message').textContent =
            '🤬You Lost    😡 Go Guess Again'; //#eb4934
          document.querySelector('body').style.backgroundColor = '#eb4934';
        }
      }
    }
  }
});

//again button
document.querySelector('.again').addEventListener('click', function () {
  randomNum = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.number').textContent = randomNum;
  document.querySelector('.message').textContent = 'Start Guessing ...';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
