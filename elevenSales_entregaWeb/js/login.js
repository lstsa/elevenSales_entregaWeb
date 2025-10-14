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

    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = listaUsuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (!usuarioEncontrado) {
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