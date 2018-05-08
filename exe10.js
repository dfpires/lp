function calcula(){
	// recuperação dos dados do formulário
	var custo = parseFloat(document.getElementById("custo").value);
	// calcula distribuidor
	var dist;
	if (custo < 12000){
		dist = (custo*5)/100;
	}
	else if (custo < 25000){
			dist = (custo*10)/100;
		}
		else dist = (custo*15)/100;
	// calcula impostos
	var imp
	if (custo < 12000){
		imp = 0;
	}
	else if (custo < 25000){
			imp = (custo*15)/100;
		}
		else imp = (custo*20)/100;
	// calcula total
	var total = custo + dist + imp
	document.getElementById("resultado").innerHTML = "Total " + total;
}