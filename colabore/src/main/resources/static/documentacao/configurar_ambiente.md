# Como configurar o ambiente de desenvolvimento

## Banco de dados
>
> - [Baixar o MySql Installer](https://spring.io/tools)
> - Instalar MySql Server
> - Instalar MySql Workbench
> - Executar MySql Workbench e conectar ao localhost com usuário root e senha Mysql00@
> - [Executar scripts para criação do database e tabelas](/colabore/src/main/resources/static/documentacao/modelagem.md)

## Baixar e instalar o Spring Tools Suite
>
> - [Baixar o STS](https://spring.io/tools)
>
> - Importe o projeto clonado na máquina como um projeto mavem existente.
>
> - Execute o projeto como uma Spring Boot App. Essa etapa levanta a camada do backend java.

## Testar API
>
> - [Baixar o POSTMAN](https://www.postman.com/downloads/) 
> - [Importar a collection como raw text](/COLABORE.postman_collection.json)
> - Executar a requisição Usuarios > CRUD > Read all, essa chamada lista todos os usuários salvos na tabela usuario.

## Subir o frontend
>
> - [Acesse o diretório](/colabore/src/main/resources/static) colabore/src/main/resources/static/
> - Abra esse diretório com o visual Studio code
> - Localize o arquivo index.html e execute a opção (Abrir com Live Server)
