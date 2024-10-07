# Frontend

Este projeto está utilizando React 18, Typescript e SCSS, e está usa o Vite como "bundler".

### Passo a passo execução

1. Instale o Node.JS versão 20 ou superior;
2. Acesso o diretório do projeto;
3. Execute o comando ``npm install`` para instalar as dependências;
4. Após dependências instaladas, você deve executar os seguintes comandos:
	1. ``npm run build`` Para gerar os arquivos de distribuição em modo produção.
	2. ``npm run preview`` Para executar aplicação em modo produção.
5. Após isso, acesse a url ``http://localhost:3000`` em seu navegador.


## Estrutura

frontend<br>
├── dist/<br>
├── public/<br>
├── package.json<br>
├── src/<br>
│  	├── assets/<br>
│   ├── components/<br>
│   ├── hooks/<br>
│   ├── pages/<br>
│   ├── repositories/<br>
│   ├── scss/<br>
│   │   ├── components/<br>
│   │   ├── pages/<br>
│   │   ├── global/<br>
│   │   └── index.scss<br>
│   └── types/<br>
└── tsconfig.json<br>


## Consideraçoes

- Utilizei BEM para nomeclatura de classes.
- Utilizei conceitos de mobile first para criar as media queries.
- Para classes que são referentes a páginas, estou utilizando o prefixo ``p-``, para componentes ``c-`` e para utilitários ``u-``.
- Criei alguns mixins de sass para me facilitar a reutilização de alguns estilos.
- Parar criar os componentes utilizei o conceito de composition pattern.
- Para fazer as buscas de dados estou usando ``hooks`` como model das páginas
- Deixei todos os estilos na pasta ``scss`` invez de deixar junto de deu proprio componente ou página, pois como não estamos escopando o CSS, achei melhor separar, para assim ficar mais claro que temos que nos preocupar com o escopo e nomeação das classes e a reutilização de estilos.

OBS: Tentei ser o mais fiel possível nas stacks e no que foi solicitado na [Documentação](../Teste_Frontend.pdf).

## Melhorias

Vou listar alguns pontos possiveis de melhorias que poderia ser aplicado neste projeto, infelizmento por motivos de rotina não consegui realizar todos eles.

- Optei por seguir a documentação, mas invez de utilizar somente o React, poderia ter sido utilizado algum framework ou técnica de renderização do lado do servidor, como por exemplo: Next, Remix. A renderização do lado de servidor ajuda na indexação, e carregamento inicial do conteúdo.

- Adicionar OGs dos produtos, para melhorar o SEO e indexação nos mecanismos de buscas.

- Adicionar title, description de cada produto e páginas para melhorar SEO.

- Aplicar Lazyload de componentes ou páginas para otimizar o carregamento do javascript inicial.

- Aplicar testes unitários e integração nos componentes e páginas.

- Aplicar testes E2E para validação do fluxo de busca de produtos.

- Adicionar Storybook para documentar os componentes.

- Fazar inversão de dependencias para não criar acoplamento com axios, ou repositories.

## Observação

Estou subindo os ``.env`` para o repositório com entuito de facilitar o teste, mas tenho noção que esse arquivos não se deve ir para o repositório.