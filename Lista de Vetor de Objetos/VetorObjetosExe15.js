var vetorCozinheiros = [];
var vetorIngredientes = [];
var vetorReceitas = [];
var vetorIngredientesReceitas = [];
function cadastraCozinheiro(){
	// cria um objeto
	var objeto = new Object();
	// atribui valores às propriedades
	objeto.codigo = parseInt(prompt("Informe código do cozinheiro"));
	objeto.nome = prompt("Informe nome do cozinheiro");
	// adiciono o objeto no vetor	
	vetorCozinheiros.push(objeto);
	alert("Cozinheiro cadastrado com sucesso");
}
function cadastraIngrediente(){
	// cria um objeto
	var objeto = new Object();
	// atribui valores às propriedades
	objeto.codigo = parseInt(prompt("Informe código do ingrediente"));
	objeto.descricao = prompt("Informe descrição do ingrediente");
	// adiciono o objeto no vetor	
	vetorIngredientes.push(objeto);
	alert("Ingrediente cadastrado com sucesso");
}
function cadastraReceita(){
	// cria um objeto
	var objeto = new Object();
	// atribui valores às propriedades
	objeto.codigo = parseInt(prompt("Informe código da receita"));
	objeto.nome = prompt("Informe nome da receita");
	objeto.calorias = prompt("Informe as calorias da receita");
	objeto.cozinheiro = prompt("Informe o código do cozinheiro");
	var qtde = prompt("Qts ingredientes");
	for(var i = 0; i < qtde; i++){
			var objeto2 = new Object();
			objeto2.codReceita = objeto.codigo;
			objeto2.codIngrediente = parseInt(prompt("Informe código do ingrediente"));
			objeto2.qtde = parseInt(prompt("Informe qtde do ingrediente"));
			objeto2.medida = parseInt(prompt("Informe unidade de medida do ingrediente"));
			vetorIngredientesReceitas.push(objeto2);
			alert("Ingrediente cadastrado na receita com sucesso");
	}
	// adiciono o objeto no vetor	
	vetorReceitas.push(objeto);
	alert("Receita cadastrada com sucesso");
}
function mostraReceitas(){
	var cozinheiro = parseInt(prompt("Informe código do cozinheiro"));
	var qtde = 0;
	for(var i = 0 ; i < vetorReceitas.length; i++){
		if (vetorReceitas[i].cozinheiro == cozinheiro){
			alert("Nome da receita " + vetorReceitas[i].nome);
			qtde++;
		}
	}
	if (qtde == 0){
		alert("Não existem receitas desse cozinheiro");
	}
}
function mostraReceitasCalorias(){
	var lMinimo = parseInt(prompt("Limite mínimo de caloria"));
	var lMaximo = parseInt(prompt("Limite máximo de caloria"));
	var qtde = 0;
	for(var i = 0 ; i < vetorReceitas.length; i++){
		if ((vetorReceitas[i].calorias >= lMinimo) && (vetorReceitas[i].calorias <= lMaximo)){
			alert("Nome da receita " + vetorReceitas[i].nome);
			qtde++;
		}
	}
	if (qtde == 0){
		alert("Não existem receitas com esse intervalo de caloria");
	}
}

function mostraReceitasCozinheiro(){
	var qtde;
	for(var i = 0 ; i < vetorCozinheiros.length; i++){ // para cada cozinheiro
		qtde = 0; // zera a qtde de receitas do novo cozinheiro
		for(var j = 0 ; j < vetorReceitas.length; j++){ // para cada receita
			if (vetorReceitas[j].cozinheiro == vetorCozinheiros[i].codigo){
				qtde++;
			}
		}
		alert(vetorCozinheiros[i].nome + " Qtde receitas " + qtde);
	}
}