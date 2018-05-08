function compras(){
    var valor; var totalVista = 0, totalPrazo = 0, total, parcela;
    var tipo;
    // entrade de dados
    for(i=0;i<3;i++){
        valor = parseFloat(prompt("Informe valor da compra"));
        do {
            tipo = prompt("Informe V para compra a vista e P para compra a prazo");
            tipo = tipo.toUpperCase(); // converte para maiúsculo
        }
        while ((tipo != "V") && (tipo != "P"));
        if (tipo == "V"){
            totalVista = totalVista + valor;
        }
        else {
            totalPrazo = totalPrazo + valor;
        }
    }
    // calcula o total
    total = totalVista + totalPrazo;
    // calcula 1a. parcela do total a prazo
    parcela = totalPrazo / 3;
    // saída
    document.getElementById("totalVista").innerHTML = totalVista.toFixed(2);
    document.getElementById("totalPrazo").innerHTML = totalPrazo.toFixed(2);
    document.getElementById("total").innerHTML = total.toFixed(2);
    document.getElementById("parcela").innerHTML = parcela.toFixed(2);
}