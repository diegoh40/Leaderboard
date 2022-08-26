console.log('hola');
import { identity } from 'lodash';
import './style.css';


const apiUrl = fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nahBGY4T91pps5TWKsAP/scores')  

async function getScores(){
    const ssd = await apiUrl
  return ssd
}

async function addScore(datos){    
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nahBGY4T91pps5TWKsAP/scores', {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));
}

async function renderScore(){
const showScore = document.getElementById('scores')  
  let apiGet = await getScores()
  let rrr = await apiGet.json()
  let ttt = await rrr.result
  console.log(ttt);
  let show = ''
  await ttt.forEach(el =>{ 
       show +=`<tr>
           <th>${el.user}:${el.score}</th>
            </tr>`;    
            showScore.innerHTML= show
        });
        
    }    

 const newScore = document.getElementById('btn-newbook')
 newScore.addEventListener('click',(e)=>{
    e.preventDefault()
    const name = document.getElementById('nam').value 
    const score = document.getElementById('sco').value
    addScore({
        user: name,
        score: score,
    })         
 })  

 const refresh = document.getElementById('refresh')
 refresh.addEventListener('click',renderScore)








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
    
    //{result: 'Game with ID: nahBGY4T91pps5TWKsAP added.'}
    
    
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