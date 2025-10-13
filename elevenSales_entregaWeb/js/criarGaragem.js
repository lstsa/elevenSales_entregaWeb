document.getElementById('criarGaragem').addEventListener('click', function() {
    criarGaragem();
});

async function criarGaragem() {
    const nomeGaragem = document.getElementById('nomeGaragem').value;
    if (!nomeGaragem) return;

    const sessao = JSON.parse(localStorage.getItem('sessao') || '{}');
    const usuarioSessao = sessao.usuario || sessao.usua || '';

    const novaGaragem = {
        'nome': nomeGaragem,
        'nomeVendedor': usuarioSessao
    };

    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');
    listaGaragens.push(novaGaragem);
    localStorage.setItem('garagens', JSON.stringify(listaGaragens));

    window.location.href = '../garagem/garagens.html';
}
