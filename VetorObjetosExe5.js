function cadastra(){
	// cria um objeto
	var objeto = new Object();
	// atribui valores às propriedades
	objeto.codigo = parseFloat(prompt("Informe código do produto"));
	objeto.descricao = parseInt(prompt("Informe descrição do produto"));
	objeto.valor = parseInt(prompt("Informe valor unitário"));
	objeto.qtde = prompt("Informe qtde em estoque");
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