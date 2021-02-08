var btlig = window.document.getElementById('ligar')
//var velocidade = window.document.getElementById('vel')	
var resVel = window.document.getElementById('vel')
var ligado = false;
var velocidade = Number(0);


function chave() {
    if (ligado == true) {
        btlig.style.backgroundColor = 'red'
        btlig.innerText = "Off"
        velocidade = 0;
        resVel.innerHTML = 0;
        ligado = false
    } else {
        btlig.style.backgroundColor = 'green'
        btlig.innerText = "On"
        ligado = true
    }

}

function acelerar() {
    if (ligado == true && velocidade < 45){ 
    velocidade = velocidade + 1;
    resVel.innerHTML = `${velocidade} m/s`;
    }
}

function freiar(){
    if (ligado == true && velocidade > 0){
        velocidade = velocidade - 1;
        resVel.innerHTML = `${velocidade} m/s`;
    }
}
