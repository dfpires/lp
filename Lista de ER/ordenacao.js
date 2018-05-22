function ordenacao(){
	// entrada de dados
	var A = parseFloat(document.getElementById("A").value);
	var B = parseFloat(document.getElementById("B").value);
	var C = parseFloat(document.getElementById("C").value);
	var D = parseFloat(document.getElementById("D").value);
	
	// ordenação
	var i, aux;
	for(i=0;i<3;i++){
		if (A>B){
			aux = A;
			A = B;
			B = aux;
		}
		if (B>C){
			aux = B;
			B = C;
			C = aux;
		}
		if (C>D){
			aux = C;
			C = D;
			D = aux;
		}
	}
	// saída
	document.getElementById("saida").innerHTML = A + " " + B + " " + C + 
	" " + D;
}