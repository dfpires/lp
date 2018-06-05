function principal(){
	// exercício 1
	var n = parseInt(prompt("Informe um valor"));
	alert("Soma dos elementos " + exe1(n));
}
// retorna -1 caso o valor de n seja negativo ou 0
function exe1(pn){
	if (pn <= 0){
		return -1; // retorna
	}
	else {
		var conta = 0;
		for(var i =1;i<=pn;i++){
			conta = conta + i;
		}
		return conta; // retorna
	}
}
