function cadastra(){
	// cria um objeto
	var objeto = new Object();
	// atribui valores às propriedades
	objeto.nome = prompt("Informe nome");
	objeto.p1 = parseFloat(prompt("Informe p1"));
	objeto.p2 = parseFloat(prompt("Informe p2"));
	objeto.media = (objeto.p1 + objeto.p2) / 2;
	// adiciono o objeto no vetor	
	vetor.push(objeto);
	alert("Aluno cadastrado com sucesso")
}
function lista(){
	var saida = "";
	for(var i=0;i<vetor.length;i++){
		saida = saida + (vetor[i].nome + " " + vetor[i].media) + "<br/>";
	}
	document.getElementById("lista").innerHTML = saida;
}