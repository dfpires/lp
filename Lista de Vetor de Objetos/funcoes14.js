function principal14(){
	var vetor = []; var par = []; var impar = [];
	for(var i = 0; i < 10; i++){
		vetor.push(parseInt(prompt("Informe um numero")));
	}
	exe14(vetor, par, impar); // por referência
	alert(par);
	alert(impar);
		
}

function exe14(pvetor, ppar, pimpar){
	for(var i=0;i<pvetor.length;i++){
		if (pvetor[i] % 2 == 0) {// par
			ppar.push(pvetor[i]);
		}
		else { // impar
			pimpar.push(pvetor[i]);
		}
	}
}
