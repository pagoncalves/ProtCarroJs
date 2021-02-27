var ligado = false;
var velocidade = Number(0);
var direcao = Number(0);
var m = Number(0)
var timer = setInterval(atualizaOdom,1000) 

function chave() {
    if (ligado == true) {
        $("#ligar").css("backgroundColor",'rgb(133, 18, 18)');
        $("#ligar").html("Off");
        velocidade = 0;
        $("#vel").html(0);
        ligado = false;
        direcao = 0;
        $("#imgVol").attr('src',"V_0.png")
        m = 0;
        

    } else {
        $("#ligar").css("backgroundColor", 'green');
        $("#ligar").html("On");
        ligado = true
        

    }

}

function acelerar() {
    if (ligado == true && velocidade < 45) {
        velocidade = velocidade + 1;
        $("#vel").html(`${velocidade} m/s`);
                
    }
}

function frear() {
    if (ligado == true && velocidade > 0) {
        velocidade = velocidade - 1;
        $("#vel").html(`${velocidade} m/s`);
        
    }
}

function esquerda() {
    //vai do centro para esquerda
    if (ligado == true && direcao > -90) {
        direcao = direcao - 10;

      desenhavolante();
     
    }
    
}

function direita() {
    //esta na esquerda e vai pra direita
    if (ligado == true && direcao < 90) {
        direcao = direcao + 10;

        desenhavolante();
    }   
}

function desenhavolante(){
  
    if (direcao == 0) {
        $("#imgVol").attr('src',"V_0.png");
    } else if (direcao == -10) {
        $("#imgVol").attr('src',"V_10.png");
    } else if (direcao == -20) {
        $("#imgVol").attr('src',"V_20.png");
    } else if (direcao == -30) {
        $("#imgVol").attr('src',"V_30.png");
    } else if (direcao == -40) {
        $("#imgVol").attr('src',"V_40.png");
    } else if (direcao == -50) {
        $("#imgVol").attr('src',"V_50.png");
    } else if (direcao == -60) {
        $("#imgVol").attr('src',"V_60.png");
    } else if (direcao == -70) {
        $("#imgVol").attr('src',"V_70.png");
    } else if (direcao == -80) {
        $("#imgVol").attr('src',"V_80.png");
    } else if  (direcao == -90 ){
        $("#imgVol").attr('src',"V_90.png");
    } else if (direcao == 10) {
        $("#imgVol").attr('src',"V_10d.png");
    } else if (direcao == 20) {
        $("#imgVol").attr('src',"V_20d.png");
    } else if (direcao == 30) {
        $("#imgVol").attr('src',"V_30d.png");
    } else if (direcao == 40) {
        $("#imgVol").attr('src',"V_40d.png");
    } else if (direcao == 50) {
        $("#imgVol").attr('src',"V_50d.png");
    } else if (direcao == 60) {
        $("#imgVol").attr('src',"V_60d.png");
    } else if (direcao == 70) {
        $("#imgVol").attr('src',"V_70d.png");
    } else if (direcao == 80) {
        $("#imgVol").attr('src',"V_80d.png");
    } else if (direcao == 90){
        $("#imgVol").attr('src',"V_90d.png");
              }

}

function atualizaOdom(){
    m = m + (velocidade * 1)/100 ;
     $("#odo").html(` ${m.toFixed(2)} m`)
}
