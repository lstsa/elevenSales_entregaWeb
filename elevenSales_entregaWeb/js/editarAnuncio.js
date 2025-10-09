document.addEventListener('DOMContentLoaded', () => {
    mostrar();

});


const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function mostrar() {
    const container = document.getElementById('editarAnuncio');
    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios')|| '[]');

    const anuncio = listaAnuncios[id];

    container.innerHTML = '';

    for (let i in anuncio) {
        container.innerHTML += '<label for="' + i + '"> '+ i +' </label><input type="text" id="' + i + '" value="' + anuncio[i] + '"/><br/>';
    }

    container.innerHTML += '<button id="salvar">Salvar</button>';

    document.getElementById('salvar').addEventListener('click', function(){
        for(let i in anuncio) {
            anuncio[i] = document.getElementById(i).value;
        }

        listaAnuncios[id] = anuncio;
        localStorage.setItem('anuncios', JSON.stringify(listaAnuncios));

        window.location.href = '../home/index.html';
    });


}