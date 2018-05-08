function calculaMedia(){
	var i = 0; // variavel contadora
	var media; // média das notas
	var soma = 0; // soma as notas
	var nota; // representa cada nota
	while(i < 10){
		// entrada da nota
		nota = parseFloat(prompt("Entre com uma nota"));
		// acumula nota
		soma = soma + nota;
		// incrementa contador
		i = i + 1;
	}
	// calcula média
	media = soma / i;
	// mostra resultado no HTML
	document.getElementById("resultado").innerHTML = media.toFixed(2);
}