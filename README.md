# LinkeTinder

LinkeTinder é uma aplicação que mescla conceitos de duas plataformas conhecidas (LinkedIn e Tinder). 
O LinkeTinder tem como objetivo disponibilizar um modelo de contratação baseado num "match às cegas".
Inicialmente, os candidatos poderão favoritar a vaga que eles considerem apropriada ao perfil deles.

As empresas contratantes poderão visualizar apenas as competências de diversos candidatos e os que forem considerados adequados à vaga poderão ser favoritados. 

Quando um candidato favorita uma vaga e a empresa contratante também favorita esse candidato, ocorre um "match".
A partir daí, é revelado o perfil do candidato à empresa e é possível dar continuidade ao processo seletivo de contratação.

## Features

- Cadastrar-se como empresa
- Cadastrar-se como candidato
- Opção de criar vaga
- Opção de listar candidatos anonimamente
- Opção de listar empresas anonimamente
- Opção de listar vagas anoninamente


## Tecnologias

LinkeTinder utiliza:

- IntelliJ Idea
- Groovy 4.0.14
- Java JDK 17.0.12
- HTML/CSS
- BootStrap
- dbdiagram.io
- PostgreSQL
- JDBC

## Utilização - Versão atual

1 - Instale o código fonte do LinkeTinder em sua máquina.

2 - Configure o Live-Server de acordo com suas preferências.

3 - Navegue até a pasta `front >> src`.

4 - Abra o arquivo `index.html` em seu navegador.


## Execução - Versão inicial (terminal) 

Navegue até a pasta src.
Execute o arquivo Main.groovy e siga as instruções do terminal.

> Para compilar Main.groovy é necessário JDK16+ e para executar JRE8+

## Diagrama ER 

O diagrama ER do LinkeTinder foi feito utilizando o [dbdiagram.io](https://dbdiagram.io/d/6712983497a66db9a37dedf1)

Se preferir, também pode ser visualizado a partir do arquivo `DiagramaBD.png` presente na pasta raiz da aplicação.

## Conexão com o PostgreSQL

A conexão da aplicação com o PostgreSQL foi realizada utilizando o JDBC.
O arquivo de manipualação de dados nas tabelas `scripts.sql` pode ser encontrado pelo caminho `app/src/main/groovy/database/scripts.sql`

## Considerações

LinkeTinder é um projeto realizado a partir do processo de capacitação ACZG da empresa ZeroGlosa.

## Desenvolvimento

Desenvolvido por Juliana Nogueira Peixoto (<juliananpeixoto01@ufrrj.br>)
