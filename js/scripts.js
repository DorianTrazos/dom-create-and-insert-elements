const input = document.getElementById('name-input');
const buttonGreeting = document.getElementById('greet-btn');
const container = document.getElementById('container');

buttonGreeting.addEventListener('click', () => {
  const name = input.value.trim();

  if (name !== '' || name.length >= 3) {
    const greeting = document.createElement('h2');
    greeting.textContent = `Hello, ${name}!`;
    container.appendChild(greeting);
  }
});

const rangeLabel = document.getElementById('range-label');
const rangeInput = document.getElementById('range');
const generateBtn = document.getElementById('generate-btn');
const result = document.getElementById('result');

rangeInput.addEventListener('input', event => {
  rangeLabel.textContent = event.target.value;
});

generateBtn.addEventListener('click', () => {
  const level = rangeInput.value;
  const heading = document.createElement(`h${level}`);
  heading.textContent = `I am an h${level}`;
  result.appendChild(heading);
});

const supplies = [
  'a medkit',
  'a flashlight with half battery',
  'some canned food',
  'a rusty knife',
  'a bottle of clean water',
  'a pack of bullets',
  'a piece of cloth (could be used as a bandage)',
  'a lighter',
  'an empty bottle (might be useful)',
  'some herbs (smell weird)',
  'a broken walkie-talkie',
  'a protein bar, still edible',
  'a map with strange markings'
];

const failureTexts = [
  'Nothing but silence and dust. Abby returned empty-handed.',
  'No supplies today. The world remains unforgiving.',
  "She searched everywhere, but luck wasn't on her side."
];

let day = 0;

const findButton = document.getElementById('find-button');
const supplyHistory = document.getElementById('supply-history');

findButton.addEventListener('click', () => {
  day++;

  const foundSomething = Math.random() > 0.6;

  const li = document.createElement('li');

  if (foundSomething) {
    const item = supplies[Math.floor(Math.random() * supplies.length)];
    li.textContent = `Day ${day} - Abby searched and found ${item}. Hope is not lost.`;
  } else {
    const text = `Day ${day} - ${failureTexts[Math.floor(Math.random() * failureTexts.length)]}`;
    li.textContent = text;
  }

  supplyHistory.appendChild(li);
});

const cars = ['🚗', '🚕', '🚙'];
const lastThree = [];

const button = document.getElementById('danger-button');
const trafficZone = document.getElementById('traffic-zone');
const warningText = document.getElementById('warning-text');

button.addEventListener('click', () => {
  // Elegimos un coche al azar
  const randomCar = cars[Math.floor(Math.random() * cars.length)];

  // Insertamos el coche en el div
  const carSpan = document.createElement('span');
  carSpan.textContent = randomCar;
  trafficZone.appendChild(carSpan);

  // Actualizamos histórico
  lastThree.push(randomCar);
  console.log(lastThree);
  if (lastThree.length > 3) {
    lastThree.shift();
    console.log(lastThree);
  }

  // Comprobamos si hay 3 coches iguales seguidos
  if (lastThree.length === 3 && lastThree.every(car => car === lastThree[0])) {
    warningText.textContent = 'Bego, please be careful! That car model is stalking you! 🚨';
  } else {
    warningText.textContent = ''; // Limpiamos si no hay peligro
  }
});
