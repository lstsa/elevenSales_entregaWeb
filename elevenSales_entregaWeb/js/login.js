document.getElementById('entrar').addEventListener('click', async function() {
    const logado = await login();
    if (logado) {
        window.location.href = 'home/index.html';
    }
});

async function login() {
    const listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios') || '[]'); 
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === '' || senha === '') {
        document.getElementById("msgErro").textContent = "Preencha todos os campos!";
        return false;
    }

    const usuarioEncontrado = listaUsuarios.find(u => u.usua === usuario && u.senha === senha);
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