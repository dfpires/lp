function exe1(){
    var numeros = new Array();
    var pares = new Array();
    var impares = new Array();
    // entrada de dados
    for(var i = 0; i < 6; i++){
        numeros.push(parseInt(prompt("Informe um numero")));
    }
    // processamento
    for(var i = 0; i < 6; i++){
        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i]);
        }
        else {
            impares.push(numeros[i]);
        }
    }
    //saida
    alert("Qtde de pares " + pares.length + " elementos: " + pares);
    alert("Qtde de ímpares " + impares.length + " elementos: " + impares);
}