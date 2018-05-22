function insere (){
    var numero = parseInt(prompt("Informe um número"));
    // adiciona elemento no vetor
    vetor.push(numero);
}
function consulta(){
    var saida = "";
    for(var i=0; i < vetor.length; i++){
        saida = saida + vetor[i] + "\n";
    }
    alert(saida); 
}
function remove(){
    var numero = parseInt(prompt("Informe um número"));
    // procura posição do elemento
    var posicao;
    var i ;
    for(i=0; i < vetor.length; i++){
        if (vetor[i] == numero){
            posicao = i;
            break; // pára de procurar
        }
    }
    if (i == vetor.length) {
        alert("Elemento não encontrado");
    }
    else {
        vetor.splice(posicao,1);
        alert("Elemento removido com sucesso");
    }
}
function remove2(){
    var numero = parseInt(prompt("Informe um número"));
    // procura posição do elemento
    var posicao;
    var i ;
   posicao = vetor.indexOf(numero)
    if (posicao == -1) {
        alert("Elemento não encontrado");
    }
    else {
        vetor.splice(posicao,1);
        alert("Elemento removido com sucesso");
    }
}
function atualiza(){
    var numero = parseInt(prompt("Informe um número"));
    // procura posição do elemento
    var posicao;
    var i ;
    for(i=0; i < vetor.length; i++){
        if (vetor[i] == numero){
            posicao = i;
            break; // pára de procurar
        }
    }
    if (i == vetor.length) {
        alert("Elemento não encontrado");
    }
    else {
        var novo = parseInt(prompt("Informe novo número"));
        vetor[posicao] = novo;
        alert("Elemento " + numero + " alterado com sucesso");
    }
}
