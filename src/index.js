import './style.css';

const getScores = async () => (
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nahBGY4T91pps5TWKsAP/scores')
    .then((response) => response.json())
);

async function addScore(datos) {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nahBGY4T91pps5TWKsAP/scores', {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json());
  // .then((json) => console.log(json));
}

const renderScore = async () => {
  const showScore = document.getElementById('scores');
  const apiGet = await getScores();
  const ttt = apiGet.result;
  showScore.innerHTML = '';
  ttt.forEach((el) => {
    showScore.innerHTML += `<tr>
           <th>${el.user}:${el.score}</th>
            </tr>`;
  });
};
// -----Events------

document.addEventListener('DOMContentLoaded', renderScore);

const newScore = document.getElementById('btn-newbook');
newScore.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('nam').value;
  const score = document.getElementById('sco').value;
  addScore({
    user: name,
    score,
  });
  renderScore();
});

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', renderScore);

/*   let _datos = {
        name: "My cool new game"
    } */

/*  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) a
    .then(json => console.log(json)); */

// {result: 'Game with ID: nahBGY4T91pps5TWKsAP added.'}

/* let diegoscore = {
        user:'carlos',
        score: 25,
      }

    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nahBGY4T91pps5TWKsAP/scores', {
        method: "POST",
        body:JSON.stringify(diegoscore),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json)); */