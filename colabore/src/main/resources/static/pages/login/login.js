

var url_controller = "http://localhost:8080/usuarios";
sessionStorage.removeItem("usuario_logado")


$("#entrar").on(
    "click",
    function () {
        let usuario = obterValores()
         if(usuario){
             entrar(usuario) ;

         }

    }
);

function obterValores() { 
    let campo_email = $("#email").val()
    let campo_senha = $("#senha").val() 

    let usuario = { 
        email: campo_email,
        senha: campo_senha,
    }
    console.log(usuario);
    if(validar(usuario)){
        return usuario

    }

}

function validar(usuario){
    let avisos="";
    if(!usuario.email){
        avisos+="O campo e-mail não foi informado\n"
    }
    
    if(!usuario.senha){ 
        avisos+="O campo senha não foi informado\n"
    }

    if(avisos!=""){
        alert(avisos)
        return false;
    }

    return true
}


function entrar(usuario) { 
    console.log(usuario);
    $.ajax(
        {
            type: "post",
            url: url_controller+"/logar",
            headers: {
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            data: JSON.stringify(usuario),
            success: function (response) {
                console.log(response)
                if(response){
                    sessionStorage.setItem("usuario_logado",JSON.stringify(response))
                    window.location.href="/pages/dashboard/dashboard.html"
                }else{
                    alert("Não localizamos um usuário com esse email ou senha")
                }
               
            },
            error: function (erro) {
                console.warn(erro)
            }
        }
    );
}