const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');
const boton = document.getElementById('comenzar');
const tempo = document.getElementById('tempo');
const detener = document.getElementById('detener');
const pausar = document.getElementById('pausar');
const sound = cargarSonido('./media/sound.wav');

let time = ["00","00","00"]
let intervalTempo,firsTime=true;

function initTempo(){
    if(conversor()){
        intervalTempo=setInterval(startTempo,1000);
    }else{
        console.error("No se pudo inicializar el temporizador");
    }
}

function stopTempo(){
    reset(0);
}

function pauseTempo(){
    if (firsTime){
        pausar.textContent="Reanudar";
        reset();
        firsTime=false;
    }else{
        pausar.textContent="Pausar";
        reset(-1);
        firsTime=true;
    }
}

console.log("%cVersión 0.0.0a1\n%cCódigo fuente: https://github.com/GJZ26/Temporizador.js","color: rgb(11, 0, 160);","font-style: italic;")

segundo.addEventListener('keyup',setTime);
minuto.addEventListener('keyup',setTime);
hora.addEventListener('keyup',setTime);
boton.addEventListener('click',initTempo);
detener.addEventListener('click',stopTempo);
pausar.addEventListener('click',pauseTempo)