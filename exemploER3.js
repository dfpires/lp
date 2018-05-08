function calculaMedia(){
	var i = 0; // variavel contadora
	var media; // média das notas
	var soma = 0; // soma as notas
	var nota; // representa cada nota
	
	// entrada da nota
	nota = parseFloat(prompt("Entre com uma nota"));
	do{
		// acumula nota
		soma = soma + nota;
		// incrementa contador
		i = i + 1;
		// entrada da nota
		do {
			nota= parseFloat(prompt("Informe outra nota " + i + " Não digite texto. Digite -1 para encerrar"));
		}
		while (isNaN(nota));
	}
	while (nota >= 0);
	// calcula média
	media = soma / i;
	// mostra resultado no HTML
	document.getElementById("resultado").innerHTML = media.toFixed(2);
}