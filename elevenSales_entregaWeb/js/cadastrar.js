document.getElementById("cadastrar").addEventListener("click", function(){
    const cadastrado = armazenar();
    if (cadastrado) {
        window.location.href = "index.html";
    }
});

function armazenar(){
    const usuario = {usua: "", senha:"", confirmaSenha: ""};
    usuario.usua = document.getElementById("usuario").value;
    usuario.senha = document.getElementById("senha").value;
    usuario.idade = document.getElementById("idade").value;
    usuario.telefone = document.getElementById("telefone").value;
    usuario.email = document.getElementById("email").value;
    usuario.confirmaSenha = document.getElementById("confirmaSenha").value;

    document.getElementById("msgErro").textContent = "";
    if(usuario.senha != usuario.confirmaSenha){
        document.getElementById("msgErro").textContent = "Senhas não conferem!";
        return false;
    }
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear();
});
