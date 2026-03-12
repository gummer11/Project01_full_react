//js2 try

//s1
console.clear();
const getJokeBtn = document.getElementById('get-joke-btn');
const jokeEl = document.getElementById('joke');

const API = 'https://icanhazdadjoke.com/';

addJokeToDOM();

async function addJokeToDOM() {
    const res = await fetch(API, {
        headers: {
            'accept': 'application/json'
        }
    });

    const data = await res.json();

    jokeEl.innerText = data.joke;

    console.log(data);
}

getJokeBtn.addEventListener('click', addJokeToDOM);
//s1 vége
//s2

//s2 vége

