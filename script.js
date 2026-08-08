let carrinho = [];

function adicionarCarrinho(nome, preco) {

    carrinho.push({
        nome: nome,
        preco: preco
    });

    atualizarCarrinho();
}

function removerProduto(indice) {

    carrinho.splice(indice, 1);

    atualizarCarrinho();
}

function atualizarCarrinho() {

    let quantidade = carrinho.length;
    let total = 0;

    for (let produto of carrinho) {
        total = total + produto.preco;
    }

    document.getElementById("quantidade").textContent = quantidade;

    document.getElementById("total").textContent = total.toFixed(2);

}
