//EXO 1

/*
let mot = "wilson-2";
let i = 0;



function MachineEcrire() {
    let temps = setInterval(function() {
        if (i < mot.length) { 
            let div = document.getElementById('compte_a_rebours');      
            div.innerText = mot.substring(0, i + 1);
            i++;
            
        } else {
            clearInterval(temps)
        }
        
    }, 1000); 
}

MachineEcrire();
*/



//EXO 2

/*
function timerStart() {

    let compteur = 0;
    let timerId = document.getElementById ('timer')

    function timerUpdate() {
        compteur++;
        let minute

        if (compteur >= 120) {
            let minutes = Math.floor(compteur / 60);
            minute = minutes + " minutes se sont écoulées";
        } else if (compteur >= 60) {
            minute = "1 minute s'est écoulée";

        }else{
            minute = compteur + " secondes";
        }
           

        timerId.innerText = minute;
    }
    setInterval(timerUpdate, 50);
}

window.onload = timerStart;
*/

//EXO 3

window.onload = function () {
    let score = 0;
    const scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'score';
    scoreDisplay.innerText = 'Score: 0';
    document.body.appendChild(scoreDisplay);

    function taupeStart() {
        let trous = document.querySelectorAll('.trou');
        let aléatoire = Math.floor(Math.random() * trous.length);
        let taupe = document.createElement('div');
        taupe.classList.add('taupe');
        trous[aléatoire].appendChild(taupe);

        taupe.addEventListener('click', function () {
            score++;
            scoreDisplay.innerText = 'Score: ' + score;
            taupe.remove();
        });

        setTimeout(() => {
            taupe.remove();
        }, 1000);
    }

    setInterval(taupeStart, 1000);
};











