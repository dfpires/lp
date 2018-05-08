function exe6(){
    var vendas = new Array(); var comissoes = new Array();
	var nomes = new Array(); var recebe = new Array();
	var total = 0;
	// entrada de dados
    for(var i = 0; i < 5; i++){
		nomes.push(prompt("Informe nome do vendedor"));
		vendas.push(parseFloat(prompt("Informe valor da venda")));
		comissoes.push(parseFloat(prompt("Informe percentual da venda")));
    }
	// calcula valor a receber do vendedor
	// calcula total de vendas
    for(var i = 0; i < 5; i++){ // para cada vendedor
		recebe[i] = (vendas[i] * comissoes[i]) / 100;
		total = total + vendas[i];
	}
	// calcula menor e maior valor a receber
	// relatorio
	var menor = recebe[0]; var maior = recebe[0];
	var relatorio = "";
	for(var i = 0; i < 5; i++){ // para cada vendedor
		if (recebe[i] > maior) {
			maior = recebe[i];
		}
		if (recebe[i] < menor) {
			menor = recebe[i];
		}
		relatorio = relatorio + "\n" + nomes[i] + " : " + recebe[i];
	}
    //saida
	alert("Total de vendas " + total);
	var posicaoMenor = recebe.indexOf(menor);
	alert("Nome com menor comissão " + nomes[posicaoMenor]);
	var posicaoMaior = recebe.indexOf(maior);
	alert("Nome com maior comissão " + nomes[posicaoMaior]);
	alert(relatorio);
}