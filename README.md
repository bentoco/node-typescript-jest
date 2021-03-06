# node-typescript

Aplicação construida com TypeScript, Sucrase, ESLint, Express, MongoDB, Mongoose e outras ferramentas. Criei essa aplicação com o objetivo de conhecer um pouco mais o TypeScript, linguagem que nos permite adicionar tipagem estática ao JavaScript que por padrão é uma linguagem que possui tipagem dinâmica.

Contei com auxílio do [Sucrase](https://github.com/alangpierce/sucrase) para converter o código TS em JS, que é uma alternativa ao Babel e permite construções de desenvolvimento super-rápidas. [ESLint](https://eslint.org/) que é de grande ajuda quando não temos muita experiência com a linguagem para identificação de problemas, e dependendo do bug automaticamente fixá-los. Também não menos importante, [Prettier](https://prettier.io/) para formatação do código.

## How to Setup

Primeiro clone ou faça o download do repositório

```
git clone https://github.com/bentoco/node-typescript.git
```

Depois disso você pode instalar as dependências executando o seguinte comando na pasta raiz do projeto


```
npm install
```

ou com yarn

```
yarn
```

É preciso também criar arquivo contendo as váriaveis de ambiente conforme o arquivo `.env.exemple`.
