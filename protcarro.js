var btlig = window.document.getElementById('ligar')
//var velocidade = window.document.getElementById('vel')
var resVel = window.document.getElementById('vel')
function ligar() {

    btlig.style.backgroundColor = 'green'
    btlig.innerText = "On"
}

function desligar() {
    btlig.style.backgroundColor = 'red'
    btlig.innerText = "Off"
}

function acelerar() {
     var maisVel = 1;
    resVel.innerHTML = Number(maisVel.value) + 1;
}
















