document.addEventListener('DOMContentLoaded', () => {
    mostrar();
});

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

async function mostrar() {
    const container = document.getElementById('editarLeilao');
    const listaLeiloes = JSON.parse(localStorage.getItem('leilao')|| '[]');
    const leilao = listaLeiloes.find(l => l.id === id);

    if (!leilao) {
        container.innerHTML = '<p>Leilão não encontrado.</p>';
        return;
    }

    container.innerHTML = '';
    ['nome', 'descricao', 'preco'].forEach(campo => {
        container.innerHTML += `<label for="${campo}"> ${campo} </label>
            <input type="text" id="${campo}" value="${leilao[campo]}"/><br/>`;
    });

    container.innerHTML += '<button id="salvar">Salvar</button>';

    document.getElementById('salvar').addEventListener('click', function(){
        ['nome', 'descricao', 'preco'].forEach(campo => {
            leilao[campo] = document.getElementById(campo).value;
        });

        const idx = listaLeiloes.findIndex(l => l.id === id);
        listaLeiloes[idx] = leilao;
        localStorage.setItem('leilao', JSON.stringify(listaLeiloes));

        window.location.href = '../anuncios/leilao.html';
    });
}