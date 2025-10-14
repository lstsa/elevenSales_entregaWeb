document.addEventListener('DOMContentLoaded', () => {
    mostrar();

});


const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function mostrar() {
    const container = document.getElementById('editarLeilao');
    const listaLeiloes = JSON.parse(localStorage.getItem('LeilistaLeiloes')|| '[]');

    const Leilao = listaLeiloes[id];

    container.innerHTML = '';

    for (let i in Leilao) {
        container.innerHTML += '<label for="' + i + '"> '+ i +' </label><input type="text" id="' + i + '" value="' + Leilao[i] + '"/><br/>';
    }

    container.innerHTML += '<button id="salvar">Salvar</button>';

    document.getElementById('salvar').addEventListener('click', function(){
        for(let i in Leilao) {
            Leilao[i] = document.getElementById(i).value;
        }

        listaLeiloes[id] = Leilao;
        localStorage.setItem('LeilistaLeiloes', JSON.stringify(listaLeiloes));

        window.location.href = '../home/index.html';
    });


}