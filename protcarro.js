var btlig = window.document.getElementById('ligar')
//var velocidade = window.document.getElementById('vel')	
var resVel = window.document.getElementById('vel')
var ligado = false;
var velocidade = Number(0);
var direcao = Number(0);
var imagem = window.document.getElementById('imgVol')
var atua = window.document.getElementById('odo')


function chave() {
    if (ligado == true) {
        btlig.style.backgroundColor = 'rgb(133, 18, 18)';
        btlig.innerText = "Off";
        velocidade = 0;
        resVel.innerHTML = 0;
        ligado = false;
        direcao = 0;
    } else {
        btlig.style.backgroundColor = 'green'
        btlig.innerText = "On"
        ligado = true

    }

}

function acelerar() {
    if (ligado == true && velocidade < 45) {
        velocidade = velocidade + 1;
        resVel.innerHTML = `${velocidade} m/s`;
    }
}

function freiar() {
    if (ligado == true && velocidade > 0) {
        velocidade = velocidade - 1;
        resVel.innerHTML = `${velocidade} m/s`;
    }
}

function esquerda() {
    //vai do centro para esquerda
    if (ligado == true && direcao > -90 && direcao <= 0) {
        direcao = direcao - 10;

        if (direcao == 0) {
            imagem.src = "V_0.png";
        } else if (direcao == -10) {
            imagem.src = "V_10.png";
        } else if (direcao == -20) {
            imagem.src = "V_20.png";
        } else if (direcao == -30) {
            imagem.src = "V_30.png";
        } else if (direcao == -40) {
            imagem.src = "V_40.png";
        } else if (direcao == -50) {
            imagem.src = "V_50.png";
        } else if (direcao == -60) {
            imagem.src = "V_60.png";
        } else if (direcao == -70) {
            imagem.src = "V_70.png";
        } else if (direcao == -80) {
            imagem.src = "V_80.png";
        } else {
            imagem.src = "V_90.png";
        }
     
    }
    if (ligado == true && direcao > 0 && direcao <= 90) {
        direcao = direcao - 10;

    if (direcao == 0) {
        imagem.src = "V_0.png";
    } else if (direcao == 10) {
        imagem.src = "V_10d.png";
    } else if (direcao == 20) {
        imagem.src = "V_20d.png";
    } else if (direcao == 30) {
        imagem.src = "V_30d.png";
    } else if (direcao == 40) {
        imagem.src = "V_40d.png";
    } else if (direcao == 50) {
        imagem.src = "V_50d.png";
    } else if (direcao == 60) {
        imagem.src = "V_60d.png";
    } else if (direcao == 70) {
        imagem.src = "V_70d.png";
    } else if (direcao == 80) {
        imagem.src = "V_80d.png";
    }
   

            }
}

function direita() {
    //esta na esquerda e vai pra direita
    if (ligado == true && direcao <= 0 && direcao < 90) {
        direcao = direcao + 10;

        if (direcao == 0) {
            imagem.src = "V_0.png";
        } else if (direcao == -10) {
            imagem.src = "V_10.png";
        } else if (direcao == -20) {
            imagem.src = "V_20.png";
        } else if (direcao == -30) {
            imagem.src = "V_30.png";
        } else if (direcao == -40) {
            imagem.src = "V_40.png";
        } else if (direcao == -50) {
            imagem.src = "V_50.png";
        } else if (direcao == -60) {
            imagem.src = "V_60.png";
        } else if (direcao == -70) {
            imagem.src = "V_70.png";
        } else if (direcao == -80) {
            imagem.src = "V_80.png";
        }
      
    }
    //vai do centro para direita
   if (ligado == true && direcao > 0 && direcao < 90 ) {
        direcao = direcao + 10;


       if (direcao == 0) {
            imagem.src = "V_0.png";
        } else if (direcao == 10) {
            imagem.src = "V_10d.png";
        } else if (direcao == 20) {
            imagem.src = "V_20d.png";
        } else if (direcao == 30) {
            imagem.src = "V_30d.png";
        } else if (direcao == 40) {
            imagem.src = "V_40d.png";
        } else if (direcao == 50) {
            imagem.src = "V_50d.png";
        } else if (direcao == 60) {
            imagem.src = "V_60d.png";
        } else if (direcao == 70) {
            imagem.src = "V_70d.png";
        } else if (direcao == 80) {
            imagem.src = "V_80d.png";
        } else {
            imagem.src = "V_90d.png";
                  }
    }
}