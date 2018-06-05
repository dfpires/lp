function principal3(){
	// exercício 3
	var cadeia1, cadeia2;
	cadeia1 = prompt("Informe a cadeia 1");
	cadeia2 = prompt("Informe a cadeia 2");
	var resultado = exe3(cadeia1, cadeia2);
	if (resultado == -1){
		alert("Cadeias são iguais");
	}
	else {
		alert("Cadeias são diferentes a partir da posição " + resultado);
	}
	
}
function exe3(pcadeia1, pcadeia2){
	if (pcadeia1 == pcadeia2){
		return -1;
	}
	else { // são diferentes
		var menorIndice;
		if (pcadeia1.length < pcadeia2.length){
			menorIndice = pcadeia1.length;
		}
		else {
			menorIndice = pcadeia2.length;
		}
		// tipagem em JS é dinâmica - tipo das variáveis
		for(var i = 0; i < menorIndice;i++){
			if (pcadeia1[i] != pcadeia2[i]){
				return i; // achei índice
			}
		}
		// não achei índice
		return menorIndice + 1;
	}
}
