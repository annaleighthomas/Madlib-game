// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

const submitButton = document.getElementById('submit-blanks');

const nounOne = document.getElementById('noun-1');
const place = document.getElementById('place');
const personThing = document.getElementById('person-thing');
const nounTwo = document.getElementById('noun-2');
const nounThree = document.getElementById('noun-3');
const nounFour = document.getElementById('noun-4');
const verbOne = document.getElementById('verb-1');
const verbTwo = document.getElementById('verb-2');
const nounFive = document.getElementById('noun-5');
const adjective = document.getElementById('adjective');

const answerOne = document.getElementById('answer-one');

submitButton.addEventListener('click', () => {
    answerOne.textContent = nounOne.value;
});
