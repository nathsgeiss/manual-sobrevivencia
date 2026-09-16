const botao = document.querySelector(".botao-definicoes");
const termos = document.querySelector(".cartoes");
botao.addEventListener ('click',function () {
    termos.classList.toggle('sem-definicao');
});

const tema = document.querySelector(".botao-tema");
const corpo = document.querySelector(".dark");
botao.addEventListener ('click',function () {
    termos.classList.toggle('dark');
});