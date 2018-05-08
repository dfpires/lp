function cadastra(){
	// cria um objeto
	var objeto = new Object();
	// atribui valores às propriedades
	objeto.salario = parseFloat(prompt("Informe salário"));
	objeto.filhos = parseInt(prompt("Informe filhos"));
	objeto.idade = parseInt(prompt("Informe idade"));
	objeto.sexo = prompt("Informe sexo: f para feminio e m para masculino");
	// adiciono o objeto no vetor	
	vetor.push(objeto);
	alert("Habitante cadastrado com sucesso");
}
function mediaSalario(){
	var media=0;
	for(var i=0;i<vetor.length;i++){
		media = media + vetor[i].salario;
	}
	media = media / vetor.length;
	alert("A média de salários é " + media);
}
function mediaFilhos(){
	var media=0;
	for(var i=0;i<vetor.length;i++){
		media = media + vetor[i].filhos;
	}
	media = media / vetor.length;
	alert("A média de filhos é " + media);
}
function maiorSalario(){
	var maior = vetor[0].salario; // assumo a maior média
	for(var i=1;i<vetor.length;i++){
		if (vetor[i].salario > maior){
			maior = vetor[i].salario;
		}
	}
	alert("Maior salário " + maior);
}
function percentual(){
	var conta=0;
	for(var i=0;i<vetor.length;i++){
		if ((vetor[i].salario >= 1000) && (vetor[i].sexo == "f")){
			conta++;
		}
	}
	
	alert("Percentual " + conta/vetor.length*100 + "%");
}

