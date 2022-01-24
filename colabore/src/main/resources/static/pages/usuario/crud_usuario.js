

var url_controller = "http://localhost:8080/usuarios";

obterUsuarios();

$("#enviar").on(
    "click",
    function () {
        let usuario = obterValores()
        if (usuario.id) {
            editar(usuario)
        }else{
            inserir(usuario)

        }

    }
);

function obterUsuarios() {
    $("tbody").empty();
    $.ajax(
        {
            type: "get",
            url: url_controller,
            success: function (response) {
                console.log(response)
                if (response) {
                    response.forEach(usuario => {
                        escreverLinhaTabela(usuario);
                    });
                }
            },
            error: function (erro) {
                console.warn(erro)
            }
        }
    );
}

function obterValores() {
    let campo_nome = $("#nome").val()
    let campo_email = $("#email").val()
    let campo_senha = $("#senha").val()
    let campo_endereco = $("#endereco").val()
    let campo_telefone = $("#telefone").val()

    let usuario = {
        nome: campo_nome,
        email: campo_email,
        senha: campo_senha,
        endereco: campo_endereco,
        telefone: campo_telefone,
    }

    let campo_id = $("#id").val();
    if (campo_id) {
        usuario.id = campo_id;
    }
    console.log(usuario);
    return usuario
}

function inserir(usuario) { 
    $.ajax(
        {
            type: "post",
            url: url_controller,
            headers: {
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            data: JSON.stringify(usuario),
            success: function (response) {
                console.log(response)
                limparCampos();
                escreverLinhaTabela(response)
            },
            error: function (erro) {
                console.warn(erro)
            }
        }
    );
}


function editar(usuario) { 
    console.log(usuario);
    $.ajax(
        {
            type: "put",
            url: url_controller+"/"+usuario.id,
            headers: {
                'Content-Type': 'application/json',
            },
            dataType: 'json',
            data: JSON.stringify(usuario),
            success: function (response) {
                console.log(response)
                limparCampos(); 
                obterUsuarios();
            },
            error: function (erro) {
                console.warn(erro)
            }
        }
    );
}

function limparCampos() {
    $("input").val("");
}

function escreverLinhaTabela(usuario) {
    $("tbody").append(
        $("<tr>").append(
            $("<td>", { text: usuario.id }),
            $("<td>", { text: usuario.nome }),
            $("<td>", { text: usuario.email }),
            $("<td>", { text: usuario.senha }),
            $("<td>", { text: usuario.endereco }),
            $("<td>", { text: usuario.telefone }), 
            $("<td>").append(
                $("<button>", {
                    text: "Deletar",
                    class:"btn btn-danger",
                    click: function () {
                        deletar(usuario);
                    }
                }),
                $("<button>", {
                    text: "Editar",
                    class:"btn btn-success m-1",
                    click: function () {
                        preencherCampos(usuario);
                    }
                })
            ), 
        )
    )
}

function deletar(usuario) {
    $.ajax(
        {
            type: "delete",
            url: url_controller + "/" + usuario.id,
            success: function (response) {
                console.log(response)
                if (response) {
                    obterUsuarios();
                }
            },
            error: function (erro) {
                console.warn(erro)
            }
        }
    );
}

function preencherCampos(usuario){ 
    $("#id").val(usuario.id)
    $("#nome").val(usuario.nome)
    $("#email").val(usuario.email)
    $("#senha").val(usuario.senha)
    $("#endereco").val(usuario.endereco)
    $("#telefone").val(usuario.telefone)
    $("#enviar").text("Editar")
}