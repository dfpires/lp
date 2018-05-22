function exe4(){
    var numeros = new Array(); var posicoes = new Array();
	// entrada de dados
    for(var i = 0; i < 10; i++){
        numeros.push(parseInt(prompt("Informe um numero")));
    }
    // processamento
    for(var i = 0; i < 10; i++){
        if (numeros[i] == 30) {
            posicoes.push(i);
        }
    }
    //saida
    alert("Posições contendo o 30 " + posicoes);
}