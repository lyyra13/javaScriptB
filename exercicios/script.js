//1 - soma simples
function somar(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado1:" + (n1 + n2);
}

function verificarIdade(){
    let idade = Number(document.getElementById("idade").value);
    if(idade < 18){
        document.getElementById("resultado2").innerText = "menor idade ";
    }
    else
    {
        document.getElementById("resultado2").innerText = "maior idade";
    }
}

function contarCaracteres(){
    let texto = (document.getElementById("texto").value);
    document.getElementById("resultado3").innerText = "Quantidade de caracteres: " + texto.length;
}

function verificarImparPar(){
    let num = Number(document.getElementById("num").value);
    if(num % 2 === 0){
        document.getElementById("resultado4").innerText = "Par";
    }
    else 
    {
        document.getElementById("resultado4").innerText = "Ímpar";
    }
}

function nomeCaixaAlta() {
    let texto = (document.getElementById("texto").value);
    document.getElementById("resultado5").innerText = "Palavra em caixa alta: " + texto.toUpperCase();
}