let total = 0;
let btn = document.getElementById("enviar");
btn.addEventListener("click", function (e) {
    if (total == 0) {
        total = 1;
        let mensagem = document.getElementById("mensagem");
        mensagem.innerText = total + " " + "comentários";
    } else {
        total = total + 1;
        let mensagem = document.getElementById("mensagem");
        mensagem.innerText = total + " " + "comentários";
    }
});
function handleSubmit(event) {
    event.preventDefault();
    const comentario = document.getElementById('text').value;
    console.log(comentario);
    document.getElementById('loading').style.display = 'block';
    document.getElementById('text').value = '';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 2000);
}





let elementos = document.getElementsByClassName('click');
Array.from(elementos).forEach((item) => {
    item.addEventListener('click', function (e) {
        let texto = this.parentNode.getElementsByClassName("texto")[0];
        let estado = texto.style.display;
        if (estado === "block") {
            texto.style.display = "none";
            this.getElementsByClassName("mais")[0].innerText = "+";
            this.style.borderBottomRightRadius = "30px";
            this.style.borderBottomLeftRadius = "30px";
        } else {
            this.style.borderBottomRightRadius = 0;
            this.style.borderBottomLeftRadius = 0;
            texto.style.borderTopLeftRadius = 0;
            texto.style.borderTopRightRadius = 0;
            texto.style.display = "block";
            this.getElementsByClassName("mais")[0].innerText = "-";
        }
    })
})

document.getElementById('submit').addEventListener('click', function (event) {
    // Previne o envio do formulário
    event.preventDefault();

    // Captura os valores dos inputs
    var nome = document.getElementById('Nome').value;
    var sobrenome = document.getElementById('Nome').value; // Corrigir para o segundo input
    var email = document.getElementById('Email').value;
    var idade = document.getElementById('idade').value;
    var tempoT = document.getElementById('tempoT').value;

    // Monta as mensagens de resposta
    var respostaUm = "Olá senhor(a)" + nome + " " + sobrenome + ", Passar muitas horas em frente às telas pode trazer consequências para a sua saúde. O uso excessivo pode causar fadiga ocular, dores de cabeça, sedentarismo, problemas posturais e impactar a qualidade do sono É importante equilibrar o tempo que você passa na frente das telas com atividades físicas, pausas regulares e momentos de interação social. Cuidar da nossa saúde é essencial para garantir bem-estar físico e mental!";
    var respostaDois = "Olá senhor(a)" + nome + " " + sobrenome + ", Você está conseguindo manter um bom equilíbrio no seu tempo de tela! Isso significa que você está utilizando a tecnologia de maneira consciente, aproveitando seus benefícios sem comprometer sua saúde. Um tempo de tela bem administrado permite que você se mantenha conectado com amigos e familiares, estude e trabalhe de forma produtiva. Continue assim! O equilíbrio é a chave para garantir que o uso da tecnologia traga alegria e produtividade, sem afetar seu bem-estar físico e mental. Aproveite cada momento, sempre com consciência!";
    var respostaAlerta = "Olá senhor(a)" + nome + " " + sobrenome + ", É importante estar ciente de que passar mais de 12 horas em frente às telas pode ser extremamente prejudicial à saúde. Esse excesso pode levar a problemas como fadiga ocular intensa, dores de cabeça frequentes, sedentarismo e até distúrbios no sono. Além disso, a má postura durante longos períodos pode causar dores nas costas e no pescoço. Para proteger sua saúde, é essencial reduzir o tempo de tela e incluir pausas regulares, além de atividades físicas na sua rotina diária. Cuide-se!"
    if (tempoT > 12) {
        document.getElementById('respostaUm').innerText = respostaAlerta;
    } else if (idade < 2 && tempoT > 0) {
        document.getElementById('respostaUm').innerText = respostaUm;

    } else if (idade < 2 && tempoT === 0) {
        document.getElementById('respostaUm').innerText = respostaDois;

    } else if (idade >= 2 && idade < 5 && tempoT > 1) {
        document.getElementById('respostaUm').innerText = respostaUm;

    } else if (idade >= 2 && idade < 5 && tempoT <= 1) {
        document.getElementById('respostaUm').innerText = respostaDois;

    } else if (idade >= 5 && idade < 10 && tempoT > 2) {
        document.getElementById('respostaUm').innerText = respostaUm;

    } else if (idade >= 5 && idade < 10 && tempoT <= 2) {
        document.getElementById('respostaUm').innerText = respostaDois;

    } else if (idade >= 10 && idade < 18 && tempoT > 3) {
        document.getElementById('respostaUm').innerText = respostaUm;

    } else if (idade >= 10 && idade < 18 && tempoT <= 3) {
        document.getElementById('respostaUm').innerText = respostaDois;

    } else if (idade >= 18 && tempoT > 5) {
        document.getElementById('respostaUm').innerText = respostaUm;

    } else if (idade >= 18 && tempoT <= 5) {
        document.getElementById('respostaUm').innerText = respostaDois;
    }
});