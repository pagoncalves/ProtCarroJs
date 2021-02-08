var btlig = window.document.getElementById('ligar')
//var velocidade = window.document.getElementById('vel')	
var resVel = window.document.getElementById('vel')
var ligado = false;


function chave() {
    if (ligado == true) {
        btlig.style.backgroundColor = 'red'
        btlig.innerText = "Off"
        ligado = false
    } else {
        btlig.style.backgroundColor = 'green'
        btlig.innerText = "On"
        ligado = true
    }

}
function acelerar() {

    var maisVel = 1;
    resVel.innerHTML = Number(maisVel.value) + 1;
}
