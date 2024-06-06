const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você vê o futuro do país em 15 anos?",
        alternativas: [
            {
                texto: "Tenho má experanças para o futuro do país!",
                afirmacao: "No início ficou com medo do que o futuro do país pode acabar sendo."
            },
            {
                texto: "Acredito que o país evoluirá muito!",
                afirmacao: "Acredita no país, onde num futuro próximo o mesmo terá alto desenvolvimento."
            }
        ]
    },
    {
        enunciado: "Acredita que o país pode investir em armamentos nucleares?",
        alternativas: [
            {
                texto: "Acredito que sim!",
                afirmacao: "Tem confiança de que o governo do país fará investimentos na área de armamentos nucleares."
            },
            {
                texto: "Acredito que não!",
                afirmacao: "Não tem confiança de que o país tera armamentos nucleares em um futuro próximo."
            }
        ]
    },
    {
        enunciado: "Você acha que o governo atual do país está estável?",
        alternativas: [
            {
                texto: "Tenho confiança em dizer que sim!",
                afirmacao: "Acredita no governo atual do país, onde o país está em estado estável."
            },
            {
                texto: "Me preocupo com o país e acredito que ele não está em seu melhor estado!",
                afirmacao: "Também acredita que o país não está em um estado estável."
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
    caixaPerguntas.textContent = "Aqui estão alguns fatos sobre o que você acha do Brasil em 15 anos...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();