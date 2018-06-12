function comeca(){
	// declarações
	var vendas = [];
	for (var i=0;i<12;i++){
		vendas[i] = []; // criando a matriz
	}
	entrada(vendas);
	totalMes(vendas);
	totalSemana(vendas);
	totalAno(vendas);
}
// guarda os dados na matriz (pvendas)
function entrada(pvendas){
	for(var i=0;i<12;i++){ // para cada aluno
		for(var j=0;j<4;j++){ // informa as notas
			pvendas[i][j] = parseFloat(prompt("Informe total de vendas no mês " + (i+1) + " e semana " + (j+1)));
		}
	}
}
function totalMes(pvendas){
	var vetor = [];
	for(var i=0; i< 12;i++){
		vetor[i] = 0;
		for(var j=0;j<4;j++){
			vetor[i] = vetor[i] + pvendas[i][j];
		}
	}
	alert("Total vendido em cada mês " + vetor);
}
function totalSemana(pvendas){
	var vetor = [];
	for(var j=0; j< 4;j++){
		vetor[j] = 0;
		for(var i=0;i<12;i++){
			vetor[j] = vetor[j] + pvendas[i][j];
		}
	}
	alert("Total vendido em cada semana " + vetor);
}
function totalAno(pvendas){
	var total = 0;
	for(var i=0; i< 12;i++){
		for(var j=0;j<4;j++){
			total = total + pvendas[i][j];
		}
	}
	alert("Total vendido no ano " + total);
}