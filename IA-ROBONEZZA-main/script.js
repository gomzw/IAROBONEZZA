const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nos esportes um dos mais jogados e assistidos no mundo é o futebol, com isso muitos estádios, arenas etc, tem sido afetado com a poluição.  Para evitar a poluição nos estádios qual seria um meio para intervir isso?",
        alternativas: [
            {
                texto: "colocar mais lixeiras nos estádios",
                afirmacao: "No iníccom isso as pessoas vão ter mais senso e a intenção de jogar o lixo nas lixeiras o ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Criar uma multa para as pessoa que poluem esses lugares",
                afirmacao: "fazendo isso eles não vão mais jogar os lixos no chão devido a essa multa ."
            }
        ]
    },
    {
        enunciado: "Sinais de fumaça nos jogos de futebol tem afetado e poluído o meio ambiente. Para não afetar o meio ambiente o que deveria ser feito, para não só o futebol como os demais esportes não prejudiquem o planeta  ?",
        alternativas: [
            {
                texto: "Não permitir a entrada de sinais de fumaças",
                afirmacao: "as pessoas não vão utilizar a fumaça nos estádios"
            },
            {
                texto: "multar as pessoas ",
                afirmacao: "não vão mais levar por medo da multa"
            }
        ]
    },
    {
        enunciado: "O futebol tem prejudicado muitos lugares devido o vandalismo e a poluição, isso pode influenciar as pessoas fazerem a mesma coisa em outros esportes. Para que isso não aconteça o que deve ser feito ?",
        alternativas: [
            {
                texto: "Ter mais polícias presente nos eventos",
                afirmacao: "para a segurança a preservação do lugar"
            },
            {
                texto: "planejar um sistema mais rígido nas arenas e estádios etc",
                afirmacao: "Quis saber como usar IA no seu dia a dia"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
