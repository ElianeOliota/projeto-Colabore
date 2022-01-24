var usuario_logado=JSON.parse(sessionStorage.getItem("usuario_logado"))

if(!usuario_logado){
    alert("É necessário fazer o login")
    window.location="/pages/login/login.html"
}
console.log(usuario_logado);
$("#usuario_logado").text(usuario_logado.nome)