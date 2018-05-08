function pessoas(){
   var idades = new Array();
   var pesos = new Array();
   var alturas = new Array();
   var nomes = new Array();

   var qtdeIdade = 0; var qtdePeso = 0; var qtdeAltura = 0; var percentual, media;
   var somaAltura = 0;
    // entrade de dados 
    for(i=0;i<3;i++){
        idades.push(parseInt(prompt("Informe idade da pessoa")));
        alturas.push(parseFloat(prompt("Informe altura da pessoa")));
        pesos.push(parseFloat(prompt("Informe peso da pessoa")));
        nomes.push(prompt("Informe nome da pessoa"));
    }
    // processamento
    for(i=0;i<idades.length;i++){
        if (idades[i] > 50){
            qtdeIdade++;
        }
        if ((idades[i] > 10) && (idades[i] < 20)){
            qtdeAltura++;
            somaAltura += altura; // somaAltura = somaAltura + altura 
        }
        if (pesos[i] < 40){
            qtdePeso++;
        }
    }
    // média de altura das pessoas com idade entre 10 e 20
    if (qtdeAltura == 0){
        media = 0;
    }
    else media = somaAltura / qtdeAltura;
    // percentual de pessoas com peso < 40
    percentual = (qtdePeso / 3) * 100;
    
    // saída
    document.getElementById("qtdeIdade").innerHTML = qtdeIdade.toFixed(2);
    document.getElementById("media").innerHTML = media.toFixed(2);
    document.getElementById("percentual").innerHTML = percentual.toFixed(2);
}