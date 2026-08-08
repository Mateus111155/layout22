```javascript
const fotos =
    document.getElementById("fotos");

const galeria =
    document.getElementById("galeria");


fotos.addEventListener(
    "change",
    function() {

        const arquivos =
            fotos.files;


        for (
            let arquivo of arquivos
        ) {

            const imagem =
                document.createElement("img");


            imagem.className =
                "foto";


            imagem.src =
                URL.createObjectURL(
                    arquivo
                );


            imagem.onclick =
                function() {

                    abrirFoto(
                        imagem.src
                    );

                };


            galeria.appendChild(
                imagem
            );

        }

    }
);


function abrirFoto(src) {

    document.getElementById(
        "fotoGrande"
    ).src = src;


    document.getElementById(
        "visualizador"
    ).style.display = "flex";

}


function fecharFoto() {

    document.getElementById(
        "visualizador"
    ).style.display = "none";

}
```
