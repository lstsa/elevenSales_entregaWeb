document.addEventListener("DOMContentLoaded", () => {

    mostrar();
});

const params = new URLSearchParams(window.location.search);
const id = params.get('id');


async function mostrar() {
    const container = document.getElementById('editarGaragem');
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    console.log("lista:", listaGaragens);
    console.log("id:", id);

    const garagem = listaGaragens[id];
    console.log("garagem:", garagem);

    container.innerHTML = '';

    for (let i in garagem) {
        container.innerHTML += '<label for="' + i + '"> '+ i +' </label><input type="text" id="' + i + '" value="' + garagem[i] + '"/><br/>';
    }

    container.innerHTML += '<button id="salvar">Salvar</button>';

    document.getElementById('salvar').addEventListener('click', function() {

        for (let i in garagem){
            garagem[i] = document.getElementById(i).value;
        }
        listaGaragens[id] = garagem;
        localStorage.setItem('garagens', JSON.stringify(listaGaragens));

        window.location.href = '../garagem/garagens.html';
    });
}