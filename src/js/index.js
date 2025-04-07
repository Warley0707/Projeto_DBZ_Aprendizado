const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        const personagemSelecionado = document.querySelector(".personagem.selecionado");

        botaoSelecionado.classList.remove("selecionado");
        personagemSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    });
});

