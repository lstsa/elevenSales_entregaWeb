document.addEventListener('DOMContentLoaded', () => {
    opcoesGaragem();
});

document.getElementById('criarAnuncio').addEventListener('click', function() {
    criarAnuncio();
});

async function opcoesGaragem() {
    const select = document.getElementById('selectGaragem');
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');

    if (listaGaragens.length === 0) {
        select.innerHTML = '<option value="">Nenhuma garagem disponível</option>';
        return;
    }

    select.innerHTML = '<option value="">Selecione uma garagem</option>';

    for (let i = 0; i < listaGaragens.length; i++) {
        const garagem = listaGaragens[i];
        select.innerHTML += '<option value="' + garagem.nome + '">' + garagem.nome + '</option>';
    }

}

const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');

async function criarAnuncio() {
    const nomeAnuncio = document.getElementById('nome').value;
    const descricaoAnuncio = document.getElementById('descricao').value;
    const precoAnuncio = document.getElementById('preco').value;
    const condicaoAnuncio = document.getElementById('condicao').value;
    const garagem = document.getElementById('selectGaragem').value;

    const novoAnuncio = {
        'nome': nomeAnuncio,
        'descricao': descricaoAnuncio,
        'preco': precoAnuncio,
        'condicao': condicaoAnuncio,
        'garagem': garagem
    };

    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    listaAnuncios.push(novoAnuncio);
    localStorage.setItem('anuncios', JSON.stringify(listaAnuncios));

    window.location.href = '../home/index.html';
}

