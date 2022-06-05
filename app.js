const scoreEl = document.querySelector('.score');
const questionEl = document.querySelector('.question');
const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form-result');

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let result = num1 * num2;
let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = 0;
}

if (score > 0) {
  scoreEl.style.color = '#94FBAB';
} else {
  scoreEl.style.color = '#D64933';
}

scoreEl.innerText = `Puntaje: ${score}`;
questionEl.innerText = `Cuanto es ${num1} multiplicado por ${num2}?`;

formEl.addEventListener('submit', () => {
  const userAnswer = +inputEl.value;
  if (userAnswer === result) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score));
}
