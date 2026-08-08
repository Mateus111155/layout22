let quantidade = 0;
let total = 0;

function adicionarCarrinho(preco) {

    quantidade++;

    total = total + preco;

    document.getElementById("quantidade").textContent = quantidade;

    document.getElementById("total").textContent = total;

}
