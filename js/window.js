const contenedorStart = document.getElementById('start');
const alertDiv = document.getElementById('alert');
const Contenedortempo = document.getElementById('Contenedortempo');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function hiddeStart(){
    contenedorStart.classList.add('fadeOut');
    sleep(500).then(()=>{
        contenedorStart.style.display="none";
        contenedorStart.classList.remove('fadeOut');
    });
}

function showAlert(mesagge){
    alertDiv.classList.add('alert');
    alertDiv.classList.add('fadeIn');
    alertDiv.textContent=mesagge;
    sleep(3000).then(()=>{
        alertDiv.classList.remove('fadeIn');
        alertDiv.classList.add('fadeOut');
        sleep(500).then(()=>{
            alertDiv.classList.remove('alert');
            alertDiv.classList.remove('fadeOut');
            alertDiv.textContent="";
        });
    });
}

function showStart(){
    contenedorTempo.classList.add('fadeOut');
    sleep(500).then(()=>{
        contenedorStart.style.display="";
        contenedorStart.classList.add('fadeIn');
        sleep(500).then(()=>{
            contenedorStart.classList.remove('fadeIn');
            contenedorTempo.classList.remove('fadeOut');
            segundo.focus();
        })
    });
}