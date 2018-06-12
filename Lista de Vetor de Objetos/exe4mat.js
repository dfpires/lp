function comeca(){
	// declarações
	var nomes = [];
	var notas = [];
	for (var i=0;i<5;i++){
		notas[i] = []; // criando a matriz
	}
	entrada(nomes, notas);
	calcula(nomes, notas);
}
// guarda os dados no vetor (pnomes) e matriz (pnotas)
function entrada(pnomes, pnotas){
	for(var i=0;i<5;i++){ // para cada aluno
		pnomes[i] = prompt("Informe um nome");
		for(var j=0;j<5;j++){ // informa as notas
			pnotas[i][j] = parseFloat(prompt("Informe nota"));
		}
	}
}
function calcula(pnomes, pnotas){
	var medias = [];
	for(var i=0; i< 5;i++){
		medias[i] = 0;
		for(var j=0;j<5;j++){
			medias[i] = medias[i] + pnotas[i][j];
		}
		medias[i] = medias[i] / 5;
	}
	for(var i=0; i<5;i++){
		if (medias[i] >= 6){
			alert(pnomes[i] + " com nota " + medias[i] + " foi aprovado");
		}
		else if (medias[i] >= 3){
			alert(pnomes[i] + " com nota " + medias[i] + " está de exame");
		}
		else {
			alert(pnomes[i] + " com nota " + medias[i] + " foi reprovado");
		}
	}
}