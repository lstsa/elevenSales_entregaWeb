document.getElementById("cadastrar").addEventListener("click", function(){
    const cadastrado = armazenar();
    if (cadastrado) {
        window.location.href = "index.html";
    }
});

function armazenar(){
    const usuario = {usuario: "", senha:"", confirmaSenha: "", idade:"", telefone:"", email:""};
    usuario.usuario = document.getElementById("usuario").value;
    usuario.senha = document.getElementById("senha").value;
    usuario.idade = document.getElementById("idade").value;
    usuario.telefone = document.getElementById("telefone").value;
    usuario.email = document.getElementById("email").value;
    usuario.confirmaSenha = document.getElementById("confirmaSenha").value;

    document.getElementById("msgErro").textContent = "";
    if(usuario.senha !== usuario.confirmaSenha){
        document.getElementById("msgErro").textContent = "Senhas não conferem!";
        return false;
    }
    
    
    
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    if (listaUsuarios.some(u => u.usuario === usuario.usuario)) {
        document.getElementById("msgErro").textContent = "Usuário já cadastrado!";
        return false;
    }
    listaUsuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    

    return true;
}
