
localStorage.removeItem('sessao');
document.getElementById('entrar').addEventListener('click', async function() {
    const logado = await login();
    if (logado) {
        window.location.href = 'home/index.html';
    }
});

async function login() {
    
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;


    const usuarioAtual = JSON.parse(localStorage.getItem('usuario') || '{}')
    if (usuarioAtual.usua !== usuario || usuarioAtual.senha !== senha) {
        document.getElementById("msgErro").textContent = "Usuário ou senha inválidos!";
        return false;
    }

    const fd = new FormData();
    fd.append('usuario', usuario);
    fd.append('senha', senha);

    const retorno = await fetch('php/login.php', {
        method: 'POST',
        body: fd
    });

    const resposta = await retorno.json();

    localStorage.setItem('sessao', JSON.stringify(resposta));
    return true;
}