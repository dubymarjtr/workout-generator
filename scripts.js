import { abs, lowerA, lowerB, lowerI, upperA, upperB, upperI } from './data.js';

const p = document.querySelector('p');
const form = document.querySelector('form');
const divButtons = document.querySelector('.buttons-choose');
let fname;
let lname;
let level;
const tbody = document.querySelector('tbody');
const { content } = document.querySelector('template');

form.addEventListener('submit', event => {
  event.preventDefault();
  fname = document.querySelector('#fname').value;
  lname = document.querySelector('#lname').value;
  level = document.querySelector('#level').value;
  divButtons.classList.add('visible');
  form.reset();
});

function getRandomExercises(array) {
  const max = 9;
  const exercises = [];
  let n = 0;
  while (n < 5) {
    const newRandomIndex = Math.floor(Math.random() * max);
    const newRandomItem = array[newRandomIndex];
    if (!exercises.includes(newRandomItem)) {
      exercises.push(newRandomItem);
      n += 1;
    }
  }
  return exercises;
}
function displayExercises(exercises) {
  tbody.innerHTML = '';

  exercises.forEach(({ exercise, reps, weight, description }) => {
    const newRow = content.cloneNode(true);
    const tds = newRow.querySelectorAll('td');
    tds[0].innerText = exercise;
    tds[1].innerText = reps;
    tds[2].innerText = weight;
    tds[3].innerText = description;

    tbody.appendChild(newRow);
  });
}

document.querySelector('#hide-div').addEventListener('click', () => {
  document.querySelector('.div-workout').classList.remove('visible');
});

document.querySelectorAll('.btn').forEach(btn =>
  btn.addEventListener('click', event => {
    document.querySelector('.div-workout').classList.add('visible');
    const option = event.target.id;
    if (option === 'btn-upper') {
      if (level === 'beginner') {
        displayExercises(getRandomExercises(upperB));
      } else if (level === 'intermediate') {
        displayExercises(getRandomExercises(upperI));
      } else displayExercises(getRandomExercises(upperA));
    } else if (option === 'btn-lower') {
      if (level === 'beginner') {
        displayExercises(getRandomExercises(lowerB));
      } else if (level === 'intermediate') {
        displayExercises(getRandomExercises(lowerI));
      } else displayExercises(getRandomExercises(lowerA));
    } else if (option === 'btn-abs') {
      displayExercises(getRandomExercises(abs));
    }
    p.innerText = `Personalized workout for ${fname} ${lname} in level ${level}:`;
  }),
);
