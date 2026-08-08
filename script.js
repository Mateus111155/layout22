```javascript
// ==========================================
// MINHAS FINANÇAS
// ==========================================


// ------------------------------------------
// VARIÁVEIS
// ------------------------------------------


// Saldo inicial
let saldo = 1000;


// Lista de entradas
let entradas = [];


// Lista de despesas
let despesas = [];


// ==========================================
// ADICIONAR ENTRADA
// ==========================================

function adicionarEntrada() {

    // Pegar descrição
    let descricao =
        document.getElementById("descricaoEntrada").value;


    // Pegar valor
    let valor =
        Number(
            document.getElementById("valorEntrada").value
        );


    // Verificar dados
    if (
        descricao === "" ||
        valor <= 0
    ) {

        alert(
            "Digite uma descrição e um valor válido."
        );

        return;

    }


    // Criar objeto
    let novaEntrada = {

        descricao: descricao,

        valor: valor

    };


    // Adicionar na lista
    entradas.push(novaEntrada);


    // Adicionar ao saldo
    saldo = saldo + valor;


    // Atualizar página
    atualizar();


    // Limpar campos
    document.getElementById(
        "descricaoEntrada"
    ).value = "";


    document.getElementById(
        "valorEntrada"
    ).value = "";

}


// ==========================================
// ADICIONAR DESPESA
// ==========================================

function adicionarDespesa() {

    // Pegar descrição
    let descricao =
        document.getElementById("descricaoDespesa").value;


    // Pegar valor
    let valor =
        Number(
            document.getElementById("valorDespesa").value
        );


    // Verificar dados
    if (
        descricao === "" ||
        valor <= 0
    ) {

        alert(
            "Digite uma descrição e um valor válido."
        );

        return;

    }


    // Criar objeto
    let novaDespesa = {

        descricao: descricao,

        valor: valor

    };


    // Adicionar na lista
    despesas.push(novaDespesa);


    // Tirar do saldo
    saldo = saldo - valor;


    // Atualizar página
    atualizar();


    // Limpar campos
    document.getElementById(
        "descricaoDespesa"
    ).value = "";


    document.getElementById(
        "valorDespesa"
    ).value = "";

}


// ==========================================
// EXCLUIR ENTRADA
// ==========================================

function excluirEntrada(indice) {

    // Pegar entrada
    let entrada =
        entradas[indice];


    // Retirar do saldo
    saldo = saldo - entrada.valor;


    // Remover da lista
    entradas.splice(
        indice,
        1
    );


    // Atualizar
    atualizar();

}


// ==========================================
// EXCLUIR DESPESA
// ==========================================

function excluirDespesa(indice) {

    // Pegar despesa
    let despesa =
        despesas[indice];


    // Devolver dinheiro ao saldo
    saldo = saldo + despesa.valor;


    // Remover da lista
    despesas.splice(
        indice,
        1
    );


    // Atualizar
    atualizar();

}


// ==========================================
// ATUALIZAR PÁGINA
// ==========================================

function atualizar() {


    // --------------------------------------
    // SALDO
    // --------------------------------------

    document.getElementById(
        "saldo"
    ).textContent =
        saldo.toFixed(2);


    // --------------------------------------
    // LISTA DE ENTRADAS
    // --------------------------------------

    let listaEntradas =
        document.getElementById(
            "listaEntradas"
        );


    listaEntradas.innerHTML = "";


    entradas.forEach(
        function(entrada, indice) {


            let item =
                document.createElement(
                    "li"
                );


            item.innerHTML = `

                ${entrada.descricao}

                -

                R$ ${entrada.valor.toFixed(2)}

                <button
                    onclick="excluirEntrada(${indice})"
                >
                    ❌
                </button>

            `;


            listaEntradas.appendChild(
                item
            );

        }
    );


    // --------------------------------------
    // LISTA DE DESPESAS
    // --------------------------------------

    let listaDespesas =
        document.getElementById(
            "listaDespesas"
        );


    listaDespesas.innerHTML = "";


    despesas.forEach(
        function(despesa, indice) {


            let item =
                document.createElement(
                    "li"
                );


            item.innerHTML = `

                ${despesa.descricao}

                -

                R$ ${despesa.valor.toFixed(2)}

                <button
                    onclick="excluirDespesa(${indice})"
                >
                    ❌
                </button>

            `;


            listaDespesas.appendChild(
                item
            );

        }
    );


    // --------------------------------------
    // TOTAL DE ENTRADAS
    // --------------------------------------

    let totalEntradas = 0;


    entradas.forEach(
        function(entrada) {

            totalEntradas =
                totalEntradas +
                entrada.valor;

        }
    );


    document.getElementById(
        "totalEntradas"
    ).textContent =
        totalEntradas.toFixed(2);


    // --------------------------------------
    // TOTAL DE DESPESAS
    // --------------------------------------

    let totalDespesas = 0;


    despesas.forEach(
        function(despesa) {

            totalDespesas =
                totalDespesas +
                despesa.valor;

        }
    );


    document.getElementById(
        "totalDespesas"
    ).textContent =
        totalDespesas.toFixed(2);

}
```
