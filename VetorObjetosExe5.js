function cadastra(){
	// cria um objeto
	var objeto = new Object();
	// atribui valores às propriedades
	objeto.codigo = parseInt(prompt("Informe código do produto"));
	objeto.descricao = prompt("Informe descrição do produto");
	objeto.valor = parseFloat(prompt("Informe valor unitário"));
	objeto.qtde = parseInt(prompt("Informe qtde em estoque"));
	// adiciono o objeto no vetor	
	vetor.push(objeto);
	ordena(vetor);
	alert("Produto cadastrado com sucesso");
}
function ordena(vetor){
	var i, j;
	for(i=0;i<vetor.length-1;i++){
		for(j=i+1;j<vetor.length;j++){
			if (vetor[i].codigo > vetor[j].codigo){
				var aux = new Object();
				aux = vetor[i];
				vetor[i] = vetor[j];
				vetor[j] = aux;
			}
		}
	}
}
function lista(){
	var i;
	for(i=0;i<vetor.length;i++){
		alert("Código: " + vetor[i].codigo + " Descrição: " + vetor[i].descricao + " Qtde: " + vetor[i].qtde + " Valor: " + vetor[i].valor);
	}
}
function altera(){
	var codigo = parseInt(prompt("Informe código do produto"));
	for(i=0;i<vetor.length;i++){
		if (codigo == vetor[i].codigo){ // achei
			vetor[i].descricao = prompt("Informe nova descrição do produto");
			vetor[i].valor = parseFloat(prompt("Informe novo valor unitário"));
			vetor[i].qtde = parseInt(prompt("Informe nova qtde em estoque"));	
			break; // sai do for
		}
	}
	if (i == vetor.length){
		alert("Produto não existe");
	}
}
function listaEstoqueCritico(){
	var i; var conta = 0;
	for(i=0;i<vetor.length;i++){
		if (vetor[i].qtde < 5){
			alert("Código: " + vetor[i].codigo + " Descrição: " + vetor[i].descricao + " Qtde: " + vetor[i].qtde + " Valor: " + vetor[i].valor);
			conta++;
		}
	}
	if (conta == 0){
		alert("Não existe produto com estoque crítico");
	}
}





