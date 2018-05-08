function tabuada(){
	var i = 0; // variavel contadora
	var j; // variável contadora do número
	var total; // guarda cada conta
	for(j=0; j<= 10; j++){
		for(i=0;i<=10;i++){
			total = j * i;
			console.log(j + " x " + i + " = " + total)
		}
	}
	console.log("Fim do programa")
}