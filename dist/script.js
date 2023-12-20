const button = document.querySelector('.btn-theme');
const root = document.querySelector('html');

function adjustButtonSize() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 600) {
    button.style.fontSize = '12px';
  } else if (windowWidth < 900) {
    button.style.fontSize = '16px';
  } else {
    button.style.fontSize = '24px';
  }
}

adjustButtonSize();

window.addEventListener('resize', adjustButtonSize);

button.addEventListener('click', () => {
  button.classList.add('beam');
  root.classList.toggle('inverted');

  setTimeout(() => {
    button.classList.remove('beam');
  }, 1500);
});

function getRandomLetter() {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return letters[Math.floor(Math.random() * letters.length)];
}

function createFallingLetters() {
  var matrix = document.getElementById("matrix");
  var letterCount = Math.floor(window.innerWidth / 20);

  for (var i = 0; i < letterCount; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.style.left = Math.floor(Math.random() * 100) + "vw";
    letter.style.animationDuration = Math.floor(Math.random() * 10) + 5 + "s";

    letter.appendChild(document.createTextNode(getRandomLetter()));
    matrix.appendChild(letter);
  }
}

createFallingLetters();


window.addEventListener('load', function() {
  var loadingScreen = document.getElementById('loading-screen');
  var loadingBar = document.getElementById('loading-bar');
  var loadingProgress = document.getElementById('loading-progress');
  document.getElementById('loading-message');
  var progressBarWidth = 0;
  var progressInterval;

   

  progressInterval = setInterval(function() {
    progressBarWidth += 1;
    loadingBar.style.width = progressBarWidth + '%';
    loadingProgress.textContent = progressBarWidth + '%';

    if (progressBarWidth >= 100) {
      clearInterval(progressInterval);
      loadingScreen.style.display = 'none';
    }
  }, 15);
});