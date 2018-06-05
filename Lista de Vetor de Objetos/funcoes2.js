function principal(){
	// exercício 2
	var h, m, s;
	h = parseInt(prompt("Informe as horas"));
	m = parseInt(prompt("Informe os minutos"));
	s = parseInt(prompt("Informe os segundos"));
	alert("Horas em segundos " + exe2(h, m, s));
	
}
function exe2(ph, pm, ps){
	return (ph*3600) + (pm*60) + ps;
}