function teatro(){
		
	// ordenação
    var preco, aux = "<table width='80%' border='1'>";
    aux = aux + 
"<tr><th>Qtde</th><th>Preço</th><th>Desconto</th><th>Lucro</th></tr>";
    var lucro;
    var ingressos = 120;
    var maiorLucro = 0;
	for(preco=5; preco >= 1; preco = preco - 0.50){
        // cria linha da tabela
        aux = aux + "<tr>";
        // adiciona célula de ingressos
        aux = aux + "<td>" + ingressos + "</td>"
        // adiciona célula de preço
        aux = aux + "<td>" + preco + "</td>";
        // adiciona despesa
        aux = aux + "<td> 200 </td>";
        // calcula lucro
        lucro = preco * ingressos - 200;
        if (lucro > maiorLucro){
            maiorLucro = lucro;
        }
        // adiciona célula de lucro
        aux = aux + "<td>" + lucro + "</td>";
        // incrementa ingressos
        ingressos = ingressos + 26;
        // fecha tabela
        aux = aux + "</tr>";
    }
    aux = aux + "</table>";
	// saída
    document.getElementById("saida").innerHTML = 
        aux + "<br/>" + maiorLucro;
}