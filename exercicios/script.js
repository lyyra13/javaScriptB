//1 - soma simples
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado1:" + (n1 + n2);
}

function verificarIdade(){
    let n1 = Number(document.getElementById("idade").value);
    if(idade < 18){
        document.getElementById("resultado1").innerText = "idade menor que 18 anos";
    }
    else if(idade < 18){
        document.getElementById("resultado1").innerText = "idade maior que 18 anos";
    }
}