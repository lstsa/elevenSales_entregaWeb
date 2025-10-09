document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear();
});

document.getElementById('entrar').addEventListener('click', function() {
    login();
});

async function login() {
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    const fd = new FormData();
    fd.append('usuario', usuario);
    fd.append('senha', senha);

    const retorno = await fetch('php/login.php', {
        method: 'POST',
        body: fd
    });

    const resposta = await retorno.json();

    localStorage.setItem('sessao', JSON.stringify(resposta));

    window.location.href = 'home/index.html';
}