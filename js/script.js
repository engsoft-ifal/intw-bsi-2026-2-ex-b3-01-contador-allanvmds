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
});
