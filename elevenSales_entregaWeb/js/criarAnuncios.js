document.getElementById('criarAnuncio').addEventListener('click', function() {
    criarAnuncio();
});

const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');

async function criarAnuncio() {
    const idAnuncio = Date.now().toString();
    const nomeAnuncio = document.getElementById('nome').value;
    const descricaoAnuncio = document.getElementById('descricao').value;
    const precoAnuncio = document.getElementById('preco').value;
    const condicaoAnuncio = document.getElementById('condicao').value;

    const nomeVendedor = sessao.usuario || sessao.usua || '';
    const garagemId = document.getElementById('garagem').value;
    if (!nomeAnuncio || !descricaoAnuncio || !precoAnuncio || !condicaoAnuncio || !garagemId) return;

    const novoAnuncio = {
        'id': idAnuncio,
        'nome': nomeAnuncio,
        'descricao': descricaoAnuncio,
        'preco': precoAnuncio,
        'condicao': condicaoAnuncio,
        'nomeVendedor': nomeVendedor,
        'garagemId': garagemId
    };

    const listaAnuncios = JSON.parse(localStorage.getItem('anuncios') || '[]');
    listaAnuncios.push(novoAnuncio);
    localStorage.setItem('anuncios', JSON.stringify(listaAnuncios));

    window.location.href = '../home/index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    carregarGaragens();
});
 
async function carregarGaragens() {
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    const selectGaragem = document.getElementById('garagem');
    selectGaragem.innerHTML = '';

    // Pega o usuário logado da sessão
    const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');
    const usuarioSessao = sessao.usuario || sessao.usua || '';

    // Filtra as garagens do usuário logado
    const garagensUsuario = listaGaragens.filter(garagem => garagem.nomeVendedor === usuarioSessao);

    garagensUsuario.forEach(garagem => {
        const option = document.createElement('option');
        option.value = garagem.id;
        option.textContent = garagem.nome;
        selectGaragem.appendChild(option);
    });
    if (garagensUsuario.length === 0) {
        const option = document.createElement('option');
        option.value = '';
        option.textContent = 'Nenhuma garagem disponível';
        selectGaragem.appendChild(option);
    }
}
