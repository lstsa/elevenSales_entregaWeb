document.addEventListener('DOMContentLoaded', () => {
    opcoesGaragem();
});

document.getElementById('criarLeilao').addEventListener('click', function() {
    criarLeilao();
});

function opcoesGaragem() {
    const select = document.getElementById('selectGaragem');
    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');
    const usuarioSessao = sessao.usuario || sessao.usua || '';

    // Filtra garagens do usuário logado
    const garagensUsuario = listaGaragens.filter(garagem => 
        garagem.nomeVendedor === usuarioSessao
    );

    if (garagensUsuario.length === 0) {
        select.innerHTML = '<option value="">Nenhuma garagem disponível</option>';
        return;
    }

    select.innerHTML = '<option value="">Selecione uma garagem</option>';
    for (let i = 0; i < garagensUsuario.length; i++) {
        const garagem = garagensUsuario[i];
        select.innerHTML += '<option value="' + garagem.nome + '">' + garagem.nome + '</option>';
    }
}

function criarLeilao() {
    const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');
    const usuarioSessao = sessao.usuario || sessao.usua || '';

    const nomeLeilao = document.getElementById('nome').value;
    const descricaoLeilao = document.getElementById('descricao').value;
    const precoLeilao = document.getElementById('preco').value;
    const lanceInicial = document.getElementById('lanceInicial').value;
    const condicaoLeilao = document.getElementById('condicao').value;
    const dataFim = document.getElementById('dataFim').value;
    const garagem = document.getElementById('selectGaragem').value;

    if (!nomeLeilao || !descricaoLeilao || !precoLeilao || !lanceInicial || !condicaoLeilao || !dataFim || !garagem) {
        alert('Preencha todos os campos!');
        return;
    }

    const novoLeilao = {
        'id': Date.now().toString(),
        'nome': nomeLeilao,
        'descricao': descricaoLeilao,
        'preco': precoLeilao,
        'lanceInicial': lanceInicial,
        'lanceAtual': lanceInicial,
        'condicao': condicaoLeilao,
        'dataFim': dataFim,
        'nomeVendedor': usuarioSessao,
        'dataCriacao': new Date().toISOString(),
        'garagem': garagem
    };

    const listaLeilao = JSON.parse(localStorage.getItem('leilao') || '[]');
    listaLeilao.push(novoLeilao);
    localStorage.setItem('leilao', JSON.stringify(listaLeilao));

    window.location.href = '../anuncios/leilao.html';
}