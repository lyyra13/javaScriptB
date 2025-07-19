//1 - soma simples
function somar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    document.getElementById("resultado1").innerText = "Resultado1:" + (n1 + n2);
}

function verificarIdade() {
    let idade = Number(document.getElementById("idade").value);
    if (idade < 18) {
        document.getElementById("resultado2").innerText = "menor de idade ";
    }
    else {
        document.getElementById("resultado2").innerText = "maior de idade";
    }
}

function contarCaracteres() {
    let texto = (document.getElementById("texto").value);
    document.getElementById("resultado3").innerText = "Quantidade de caracteres: " + texto.length;
}

function verificarImparPar() {
    let num = Number(document.getElementById("num").value);
    if (num % 2 === 0) {
        document.getElementById("resultado4").innerText = "Par";
    }
    else {
        document.getElementById("resultado4").innerText = "Ímpar";
    }
}

function converterParaCaixaAlta() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultado5").innerText = nome.toUpperCase();
}

function compararNumeros() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    if (n1 > n2){
        document.getElementById("resultado6").innerText = "Maior número: " + n1;
    }
    else if (n2 > n1){
        document.getElementById("resultado6").innerText = "Maior número: " + n2;
    }
    else 
    {
        document.getElementById("resultado6").innerText = "Os números são iguais.";
    }
    
}

function gerarTabuada() {
    let num = Number(document.getElementById("numeroTabuada").value);
    let div = document.getElementById("resultado7");
    div.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        let linha = document.createElement("p");
        linha.innerText = `${num} x ${i} = ${num * i}`;
        div.appendChild(linha);
    }
}

function contarAteDez() {
    let div = document.getElementById("resultado8");
    div.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        let p = document.createElement("p");
        p.innerText = i;
        div.appendChild(p);
    }
}

function calcularMedia() {
    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);
    let media = (n1 + n2 + n3) / 3;
    if(media >= 6){
        document.getElementById("resultado9").innerText = "Aprovado";
    }
    else {
        document.getElementById("resultado9").innerText = "Reprovado";
    }
}

function converterTemperatura() {
    let celsius = Number(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("resultado10").innerText = `${fahrenheit.toFixed(2)} °F`;
}

function mostrarDiaSemana() {
    let num = parseInt(document.getElementById("diaNumero").value);
    let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let resultado = (num >= 1 && num <= 7) ? dias[num - 1] : "Número inválido. Digite de 1 a 7.";
    document.getElementById("resultado11").innerText = resultado;
}

function verificarSenha() {
    let senha = document.getElementById("senha").value;
    if(senha === "1234") {
        document.getElementById("resultado12").innerText = "Acesso permitido!";
    }
    else{
        document.getElementById("resultado12").innerText = "Senha incorreta.";
    }  
}

function contagemRegressiva() {
    let div = document.getElementById("resultado13");
    div.innerHTML = "";
    for (let i = 10; i >= 1; i--) {
        let p = document.createElement("p");
        p.innerText = i;
        div.appendChild(p);
    }
}