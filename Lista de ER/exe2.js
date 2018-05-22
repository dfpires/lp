function exe2(){
    var numeros = new Array(); var v2 = new Array();
	var v3 = new Array(); var v2e3 = new Array();
    // entrada de dados
    for(var i = 0; i < 7; i++){
        numeros.push(parseInt(prompt("Informe um numero")));
    }
    // processamento
    for(var i = 0; i < 7; i++){
        if ((numeros[i] % 2 == 0) &&  (numeros[i] % 3 == 0)){
            v2e3.push(numeros[i]);
        }
        else if (numeros[i] % 2 == 0) {
            	v2.push(numeros[i]);
			 }
			 else if (numeros[i] % 3 == 0){
				 	v3.push(numeros[i]);
			 	  }
    }
    //saida
    alert("Qtde de múltiplos de 2 " + v2.length + " elementos: " + v2);
	alert("Qtde de múltiplos de 3 " + v3.length + " elementos: " + v3);
	alert("Qtde de múltiplos de 2 e 3 " + v2e3.length + " elementos: " + v2e3);
}