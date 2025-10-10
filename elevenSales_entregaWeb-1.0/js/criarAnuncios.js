document.getElementById('criarAnuncio').addEventListener('click', function() {
    criarAnuncio();
});

async function criarAnuncio() {
    const idAnuncio = Date.now().toString();
    const nomeAnuncio = document.getElementById('nome').value;
    const descricaoAnuncio = document.getElementById('descricao').value;
    const precoAnuncio = document.getElementById('preco').value;
    const condicaoAnuncio = document.getElementById('condicao').value;

    if (!nomeAnuncio || !descricaoAnuncio || !precoAnuncio || !condicaoAnuncio) return;

    const novoAnuncio = {
        'id': idAnuncio,
        'nome': nomeAnuncio,
        'descricao': descricaoAnuncio,
        'preco': precoAnuncio,
        'condicao': condicaoAnuncio
    };

    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    listaAnuncios.push(novoAnuncio);
    localStorage.setItem('anuncios', JSON.stringify(listaAnuncios));

    window.location.href = '../home/index.html';
    };

