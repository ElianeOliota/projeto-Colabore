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

## Como configurar o ambiente de desenvolvimento
>
>- ### Baixar e instalar o Spring Tools Suite 
>
>   - O STS está disponível no [Link](/doc/Modulo_prevencao/doc_tela_prevencao_reportar_caso_positivo.md)
>
>- ### Reportar caso positivo
>
>   - Quando o usuário for contaminado, poderá informar para monitorar sua localização de forma anônima durante a quarentena
>
> [Ver detalhes técnicos](/doc/Modulo_prevencao/doc_tela_prevencao_reportar_caso_positivo.md)
>
>- ### Mapear riscos nas proximidades
>
>   - Verificar se nas proximidades há risco de contágio com base nas localizações compartilhadas.
>
> [Ver detalhes técnicos](/doc/Modulo_prevencao/doc_tela_prevencao_mapear_riscos.md)

## Tratamento
>
> - ### Quadro de informações
>
>   - Informa o usuário dos sintomas, possível tratamento e o que pode ajudar com a COVID-19, além de oferecer um teste para saber a gravidade dos sintomas.
>
> [Ver detalhes técnicos](/doc/Modulo_tratamento/documentacao_quadro.md)
>
> - ### Calculadora de sintomas
>
>   - Calcula os sintomas do usuário e oferece um resultado sobre a urgência em fazer um teste de covid.
>
> [Ver detalhes técnicos](/doc/Modulo_tratamento/documentacao_sintomas.md)

## Isolamento
>
>- ### Mapeamento de aglomeração
>
>   - Um mapa com os eventos sociais que ocorrerão na região do usuário para indicar-lhe locais de potencial aglomeração de pessoas em torno de um ponto geográfico.
>
> [Ver detalhes técnicos](/doc/Modulo_isolamento/documentacao_eventos.md)
>
>- ### Mapa de locais úteis
>
>   - Essa funcionalidade mostrará em um mapa as farmácias e supermercados cadastrados, próximos à região do usuário que realizam entregas e seguem os protocolos de enfrentamento à Covid-19.
>
> [Ver detalhes técnicos](/doc/Modulo_isolamento/documentacao_locais.md)

