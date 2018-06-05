function funcaoValor(){
	var x = parseInt(prompt("Informe um valor"));
	//  x tem escopo local
	var y = [];
	//  y tem escopo local
	
	y[0] = parseInt(prompt("Informe um valor")); 
	y[1] = parseInt(prompt("Informe um valor"));
	
	soma10(x); // passa o valor
	
	soma20(y); // passa a referência - objeto - vetor
	
	alert(x); // mostra valor do usuário
	
	// alert(px); // ERRO
	
	alert(y); // mostra valor do usuário somado 20
}

function soma10(px){ // passagem de parâmetro por valor
	// px tem o valor de x
	// px tem escopo local
	px = px + 10;
	
}

function soma20(py){ // passagem de parâmetro por referência
	// py tem a referência de y
	// py tem escopo local
	py[0] = py[0] + 20;
	py[1] = py[1] + 20;
	
}