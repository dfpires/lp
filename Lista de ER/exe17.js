function exe17(){
   var canal, pessoas;
   var qtde = 0;
   canal = parseInt(prompt("Qual o canal"));
   do {
        qtde++;   
        pessoas = parseInt(prompt("Quantas pessoas assistem "));

        canal = parseInt(prompt("Informe outro canal. Digite -1 para encerrar"));
   }
    while (canal != -1);

}