document.getElementById("cadastrar").addEventListener("click", function(){
    const cadastrado = armazenar();
    if (cadastrado) {
        window.location.href = "index.html";
    }
});

function armazenar(){
    var listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    var obj = {usua: "", senha:"", confirmaSenha: ""};
    obj.usua = document.getElementById("usuario").value;
    obj.senha = document.getElementById("senha").value;
    obj.confirmaSenha = document.getElementById("confirmaSenha").value;
    // Limpa mensagem de erro
    document.getElementById("msgErro").textContent = "";
    if(obj.senha != obj.confirmaSenha){
        document.getElementById("msgErro").textContent = "Senhas não conferem!";
        return false;
    }
    try{
        if(obj.usua == "" || obj.senha == "" || obj.confirmaSenha == ""){
            document.getElementById("msgErro").textContent = "Preencha todos os campos!";
            return false;
        }
    }catch(e){
        document.getElementById("msgErro").textContent = "Preencha todos os campos!";
        return false;
    }
    if(listaUsuarios == null) listaUsuarios = [];
    listaUsuarios.push(obj);
    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
    return true;
}

document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear();
});
