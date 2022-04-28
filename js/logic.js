const contenedorTempo = document.getElementById('Contenedortempo')

// Carga un sonido a través de su fuente y lo inyecta de manera oculta
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};

// Empieza el conteo de las datos almacenados en el array
function startTempo(){
    time[2]--;
    if(time[2]<0){
        time[1]--;
        time[2]=59;
    }
    if(time[1]<0){
        time[0]--;
        time[1]=59;
    }
    tempo.textContent=("0"+time[0]).slice(-2)+":"+("0"+time[1]).slice(-2)+":"+("0"+time[2]).slice(-2);

    if(time[2]==0 && time[1]==0 && time[0]==0){
        clearInterval(intervalTempo);
        sound.loop=true;
        sound.play();
        pausar.style.display="none";
        contenedorTempo.classList.add('finished');
        detener.focus();
    }
}

// Lee los números ingresados en los inputs
function setTime(){
    if(this.id == 'segundo'){
        time[2] = this.value;
        if (time[2].length>=2){
            minuto.focus();
            time[2]=time[2].substr(0,2);
            this.value=time[2];
        }
    }else if (this.id == 'minuto'){
        time[1] = this.value;
        if (time[1].length>=2){
            hora.focus();
            time[1]=time[1].substr(0,2);
            this.value=time[1];
        }
    }else{
        time[0] = this.value;
        if (time[0].length>=2){
            boton.focus();
            time[0]=time[0].substr(0,2);
            this.value=time[0];
        }
    }
    tempo.textContent=("00"+time[0]).slice(-2)+":"+("00"+time[1]).slice(-2)+":"+("00"+time[2]).slice(-2);
}

// Convierte los String del array a Number
function conversor(){
    for(let i=2; i>-1; i--){
        time[i]=parseInt(time[i]);
        if(isNaN(time[i])){
            console.warn("Las casillas vacías tendrán valor de cero");
            time[i] = 00;
        }
    }
    if(time[2]<3 && time[1]==0 && time[0]==0){
        console.warn("El temporizador debe tener un conteo mínimo de 3 segundos para iniciar");
        showAlert("El temporizador debe tener un conteo mínimo de 3 segundos para iniciar");
        segundo.focus();
        return false;
    }else{
        return true;
    }
}

// Restablece toda la página
// Opcion 0 para reestablecer todo
function reset (opcion){
    clearInterval(intervalTempo);
    if(opcion===0){    
        sound.pause();
        tempo.textContent="00:00:00"
        for(i=2; i>-1; i--){
            time[i]="00"
        }
        segundo.value="";
        minuto.value="";
        hora.value="";
        pausar.textContent="Pausar";
        firsTime=true;
        pausar.style.display="";
    }else if(opcion===-1){
        intervalTempo=setInterval(startTempo,1000);
    }
}