function idade(){
    var i; var idade;
    var f1 = 0, f2 = 0, f3 = 0;
    var f4 = 0, f5 = 0;
    // entrade de dados
    for(i=0;i<8;i++){
        idade = parseInt(prompt("Informe idade"));
        if (idade <= 15){
            f1++; // f1 = f1 + 1
        }
        else if (idade <= 30){
                f2++;
             }
            else if (idade <= 45){
                    f3++;
                }
                else if (idade <= 60){
                        f4++;
                    }   
                    else {
                        f5++;
                    }
    }
    alert("Qtde na faixa 1 " + f1); alert("Qtde na faixa 2 " + f2);
    alert("Qtde na faixa 3 " + f3); alert("Qtde na faixa 4 " + f4);
    alert("Qtde na faixa 5 " + f5); alert("Percentual faixa 1 " + f1/8*100);
    alert("Percentual faixa 5 " + f5/8*100);
}