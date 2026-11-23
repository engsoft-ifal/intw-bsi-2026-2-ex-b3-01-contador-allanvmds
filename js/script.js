let total = 0;


const elementoTotal = document.querySelector("#total");
const botaoSomar = document.querySelector("#somar");
const botaoZerar = document.querySelector("#zerar");


elementoTotal.textContent = total;


botaoSomar.addEventListener("click", () => {
    total++;
    elementoTotal.textContent = total;
});


botaoZerar.addEventListener("click", () => {
    total = 0;
    elementoTotal.textContent = total;
});// Faça o contador funcionar. Edite só este arquivo.
//
// TODO 1: mostre 0 no #total ao carregar a página.
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// escreva seu código aqui
