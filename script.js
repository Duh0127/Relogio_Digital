const hrs = document.getElementById('horas');
const mins = document.getElementById('minutos');
const segs = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let horarioAtual = new Date();
    let hr = horarioAtual.getHours();
    let min = horarioAtual.getMinutes();
    let s = horarioAtual.getSeconds();

    if(hr < 10){
        hr = '0' + hr;
    };

    if(min < 10) {
        min = '0' + min;
    };
    
    if(s < 10) {
        s = '0' + s;
    };


    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})