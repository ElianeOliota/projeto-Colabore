# projeto-Colabore - para o desafio Devs2Blu



## Objetivo

> Projeto Colabore 
>
> - O projeto tem o objetivo de criar uma rede colaborativa que apoie instituições através de doações.
>
> - Os contribuintes podem optar por fazer o cadastro ou realizar doações anonimas.
>
> - Os outros usuários serão do perfil 'instituição' que obrigatoriamente farão o cadastro para que a captura de doações seja monitorada e que o contribuinte possa escolher qual instituição conforme as informações publicadas como a visão, meta e necessidade.
>
> - A aplicação será um portal onde contribuintes e instituições possam se conectar através das doações e nenhuma valor monetário sera transacionado no servidor, as doações sejam destinadas automaticamente para instituição de preferencia do contribuinte.
>
> - Mudar o mundo não é uma tarefa impossível, basta se tornar a mudança que deseja ver no mundo, com pequenas atitudes positivas e boa vontade para ajudar a quem realmente precisa.

## Tecnologia

- A aplicação foi desenvolvida com HTML, CSS e JavaScript para o frontend. O Site tem um layout simples pois a regra de negócio e a arquitetura do projeto tem o maior peso na carga de desenvolvimento.
- IDE - Spring Tools Suite (Por ser uma IDE com maior facilidade em consumir os plugins e facilitar a configuração do projeto em uma nova maquina )
- Armazenamento - Utilizando MySql para modelagem e persistência com a ferramenta MySql Workbench e o serviço MySql80 para manter as conexões
  - O sessionStorage é um armazenamento local no navegador onde é possivel salvar e recuperar informações. Será utilizada para o cache de informações utilizada em varias telas
- Backend - Aplicação Java Spring com as dependências
   - Spring Boot DevTools : Fornece reinicializações rápidas de aplicativos, LiveReload e configurações para uma experiência de desenvolvimento aprimorada.
   - Lombok  : Biblioteca de anotações Java que ajuda a reduzir o código
   - Driver MySQL : Para incluir as classes que realizam a conexão com o banco de dados
   - Spring Data JPA : Persistência de dados em armazenamentos SQL com Java Persistence API usando Spring Data e Hibernate.

## Equipe 

Definir o papel de cada membro de acordo com o conhecimento individual

Número| Membro| Discord | Organização
------|---------|-------|------
01| André Felipe Schwanz|   André Felipe Schwanz#2261|  ---
02| Eliane Henrique Oliota| Eliane Oliota#5537| ---
03| Luan Lordello Guimarães Lima|   Luan Lordello#1751| ---
04| Maria Eduarda Krutzsch| mariazinha#8145|  ---
05| Paula Adriana da Costa| paula_costa#2011|   ---

## Funcionalidades

### Login

>Capturar email e senha para autenticar a entrada
>
>Guardar dados do usuário logado em sessão
>
>Alertar caso dê erro ao entrar


### Registrar

>Capturar nome, email e senha para autenticar o cadastro
>
>Guardar dados do usuário logado em sessão
>
>Alertar caso encontre outro usuário com mesmo e-mail


### Sair

>Retornar ao login
>
>Remover dados do usuário da sessão

### Página Principal

>Tela inicial agrega as principais funções e resumo de informações importantes como:
>
>- Menu superior:
>   - Ações dependendo do tipo de usuário
>     - Contribuinte
>       - Histórico de doações
>       - Lista de instituições para doar valores
>     - Instituição
>       - Extrato de doações recebidas
>       - Painel de informações editáveis para motive novas doações
>   - Botão de sair
>
>- Conteúdo principal:
>   - Saudação ao usuário logado
>   - Painel geral com rank das instituições ordenado por doações recebidas, os maiores beneficiários poderão ser acompanhados de perto por qualquer usuário e ver como as doações está refletindo em suas necessidades. 
>

### A tela inicial está dividida em módulos no menu superior

## Documentação em construção ...
