document.getElementById('criarGaragem').addEventListener('click', function() {
    criarGaragem();
});

async function criarGaragem() {

    const nomeGaragem = document.getElementById('nomeGaragem').value;
    const idGaragem = Date.now().toString();
    const nomeVendedor = sessao.usuario || sessao.usua || '';

    if (!nomeGaragem) return;

    const novaGaragem = {'nome': nomeGaragem, 'id': idGaragem, 'nomeVendedor': nomeVendedor};

    const listaGaragens = JSON.parse(localStorage.getItem('garagens') || '[]');

    listaGaragens.push(novaGaragem);
    localStorage.setItem('garagens', JSON.stringify(listaGaragens));

    window.location.href = '../home/index.html';

}