let carrinho = [];

function adicionarCarrinho(nome, preco) {

    let produto = carrinho.find(item => item.nome === nome);

    if (produto) {
        produto.quantidade++;
    } else {
        carrinho.push({
            nome: nome,
            preco: preco,
            quantidade: 1
        });
    }

    atualizarCarrinho();
}


function diminuirProduto(nome) {

    let produto = carrinho.find(item => item.nome === nome);

    if (produto) {

        produto.quantidade--;

        if (produto.quantidade <= 0) {
            carrinho = carrinho.filter(item => item.nome !== nome);
        }
    }

    atualizarCarrinho();
}


function removerProduto(nome) {

    carrinho = carrinho.filter(item => item.nome !== nome);

    atualizarCarrinho();
}


function atualizarCarrinho() {

    let lista = document.getElementById("listaCarrinho");

    let quantidade = 0;
    let total = 0;

    lista.innerHTML = "";

    carrinho.forEach(produto => {

        quantidade += produto.quantidade;

        total += produto.preco * produto.quantidade;

        let item = document.createElement("div");

        item.className = "item-carrinho";

        item.innerHTML = `
            <strong>${produto.nome}</strong>

            <p>
                R$ ${produto.preco.toFixed(2)}
            </p>

            <button onclick="diminuirProduto('${produto.nome}')">
                -
            </button>

            ${produto.quantidade}

            <button onclick="adicionarCarrinho('${produto.nome}', ${produto.preco})">
                +
            </button>

            <button onclick="removerProduto('${produto.nome}')">
                ❌
            </button>
        `;

        lista.appendChild(item);
    });

    document.getElementById("quantidade").textContent = quantidade;

    document.getElementById("total").textContent =
        total.toFixed(2);
}


function finalizarCompra() {

    if (carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;
    }

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let endereco = document.getElementById("endereco").value;

    if (!nome || !telefone || !endereco) {

        alert("Preencha todos os dados da compra!");

        return;
    }

    alert(
        "Compra realizada com sucesso! 🎉\n\n" +
        "Cliente: " + nome + "\n" +
        "Telefone: " + telefone + "\n" +
        "Endereço: " + endereco
    );

}
