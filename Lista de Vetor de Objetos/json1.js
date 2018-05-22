function exe1(){
	
	var aux = '[{"name":"jack", "age": "21"},{"name":"john", "age": "20"},{"name":"joe", "age": "19"}]';
	// transforma JSON em vetor
	var vetor = JSON.parse(aux);
	// mostra conteúdo do vetor
	for(var i=0; i< vetor.length;i++){
			alert(" Nome " + vetor[i].name + 
				  " Idade " + vetor[i].age);
	}
	// adiciona elemento no vetor
	var novo = '{"name":"fulano", "age":"30"}';
	// transforma JSON em elemento do vetor
	novo = JSON.parse(novo);
	// adiciona na primeira posição livre - última
	vetor.push(novo);
	
	for(var i=0; i< vetor.length;i++){
			alert(" Nome " + vetor[i].name + 
				  " Idade " + vetor[i].age);
	}
	
	// adiciona elemento no vetor
	var nome = prompt("Nome");
	var idade = prompt("Idade");
	
	var novo2 = '{"name":"' + nome + '", "age":"' + idade + '"}';
	// transforma JSON em elemento do vetor
	novo2 = JSON.parse(novo2);
	// adiciona na primeira posição livre - última
	vetor.push(novo2);
	
	for(var i=0; i< vetor.length;i++){
			alert(" Nome " + vetor[i].name + 
				  " Idade " + vetor[i].age);
	}
	
	var novo3 = new Object();
	novo3.name = "Ciclano";
	novo3.age = "40";
	
	vetor.push(novo3);
	for(var i=0; i< vetor.length;i++){
			alert(" Nome " + vetor[i].name + 
				  " Idade " + vetor[i].age);
	}
	
}

