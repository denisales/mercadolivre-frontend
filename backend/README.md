# Backend

Este projeto está utilizando Express 4.21 e Typescript.

### Passo a passo execução

1. Instale o Node.JS versão 20 ou superior;
2. Acesso o diretório do projeto;
3. Execute o comando ``npm install`` para instalar as dependências;
4. Após dependências instaladas, você podera executar os seguintes comandos:
	- ``npm run build`` Builda  aplicação para o modo produção.
	- ``npm run start`` Executa aplicação em modo produção.
5. Após isso, acesse a url ``http://localhost:8080`` em seu navegador.


## Endpoints

O Projeto desta API, contem dois endpoints:

Lista produtos por busca:<br/>
http://localhost:8080/api/items?search=bonecos

Lista detalhes do produto:<br/>
http://localhost:8080/api/items/MLB5067312818


## Estrutura

backend<br>
├── dist/<br>
├── package.json<br>
├── src/<br>
│  	├── controllers/<br>
│   ├── routes/<br>
│   ├── services/<br>
│   ├── utils/<br>
│   ├── repositories/<br>
│   ├── app.ts<br>
│   └── server.ts<br>
└── tsconfig.json<br>


## Considerações

- Apliquei um pattern simples de ``controllers`` e ``services``.
- Adicionei configuração de cors.
- Adicionei alguns campos a mais no retorno, como categorias no endpoint de detalhes, e o valor ``original_price`` no endpoints de busca e detalhes do produto.


# Melhorias

- Fazar inversão de dependencias para não criar acoplamento com axios, ou services.
- Adicionar mais endpoints de paginação e categorias.
- Adicionar um fluxo simples de autenticação utilizando JWT, e cookies http only, e secure.
- Adicionar proteção de rate limit.
- Adicionar alguma ferramenta de Log, paras registrar possiveis erros.
- Criar classe para tratamento de erros, e padronizar as respostas.

## Observação

Estou subindo os ``.env`` para o repositório com intuito de facilitar o teste, mas tenho noção que esse arquivos não se deve ir para o repositório.