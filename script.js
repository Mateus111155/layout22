```javascript
// ===============================
// SISTEMA DE FINANÇAS
// ===============================


// Lista onde vamos guardar as despesas
let despesas = [];


// Saldo inicial
let saldo = 1000;


// ===============================
// ADICIONAR DESPESA
// ===============================

function adicionarDespesa() {

    // Pega a descrição digitada
    let descricao =
        document.getElementById("descricao").value;


    // Pega o valor digitado
    let valor =
        Number(
            document.getElementById("valor").value
        );


    // Verifica se os dados estão corretos
    if (descricao === "" || valor <= 0) {

        alert(
            "Digite uma descrição e um valor válido."
        );

        return;
    }


    // Cria uma nova despesa
    let novaDespesa = {

        descricao: descricao,

        valor: valor

    };


    // Coloca a despesa na lista
    despesas.push(novaDespesa);


    // Retira o valor do saldo
    saldo = saldo - valor;


    // Atualiza a tela
    atualizar();


    // Limpa os campos
    document.getElementById("descricao").value = "";

    document.getElementById("valor").value = "";

}


// ===============================
// EXCLUIR DESPESA
// ===============================

function excluirDespesa(indice) {

    // Pega a despesa que será excluída
    let despesa = despesas[indice];


    // Devolve o dinheiro para o saldo
    saldo = saldo + despesa.valor;


    // Remove a despesa da lista
    despesas.splice(indice, 1);


    // Atualiza a tela
    atualizar();

}


// ===============================
// ATUALIZAR A TELA
// ===============================

function atualizar() {

    // Atualiza o saldo
    document.getElementById("saldo").textContent =
        saldo.toFixed(2);


    // Pega a lista do HTML
    let lista =
        document.getElementById("lista");


    // Limpa a lista
    lista.innerHTML = "";


    // Passa por todas as despesas
    despesas.forEach(
        function(despesa, indice) {


            // Cria um elemento <li>
            let item =
                document.createElement("li");


            // Coloca as informações no item
            item.innerHTML = `

                ${despesa.descricao}
                -
                R$ ${despesa.valor.toFixed(2)}

                <button
                    onclick="excluirDespesa(${indice})"
                >
                    ❌ Excluir
                </button>

            `;


            // Coloca o item na lista
            lista.appendChild(item);

        }
    );

}
```
