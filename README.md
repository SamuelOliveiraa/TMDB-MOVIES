# Documentação do Projeto: [TMDB Movies](https://samueloliveiraa.github.io/TMDB-MOVIES)

O TMDB Movies é uma aplicação que foi criada pelo Matheus Battisti do site [Hora de Codar](app.horadecodar.com.br) durante seu [curso sobre React.Js](https://www.youtube.com/watch?v=XqxUHVVO7-U&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=44). Esta aplicação web foi  desenvolvida  para exibir informações sobre filmes e permitir que os usuários pesquisem por filmes de seu interesse. A aplicação utiliza a API do TMDB (The Movie Database) para obter dados sobre os filmes.




## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/SamuelOliveiraa/TMDB-MOVIES
```

Entre no diretório do projeto

```bash
  cd TMDB-MOVIES
```

Instale as dependências

```bash
  npm install
```



## Variáveis de Ambiente

Com o projeto clonado, agora voce precisa obter uma chave de API (API Key) do TMDb em https://www.themoviedb.org/settings/api

Com isso crie um arquivo .env.local na raiz do projeto e adicione sua chave de API:

`VITE_API_KEY=YOUR_API_KEY`

`VITE_API_URL=https://api.themoviedb.org/3/`


## Iniciando o servidor

```bash
  npm run dev
```
## A Estrutura do Projeto
```bash
  TMDB-Movies/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Header.jsx
  │   │   ├── LazyLoadImage.jsx
  │   │   ├── MovieCard.jsx
  │   │   └── ShowStars.jsx
  │   ├── pages/
  │   │   ├── Home.jsx
  │   │   ├── Movie.jsx
  │   │   ├── NotFound.jsx
  │   │   └── Search.jsx
  │   ├── utils/
  │   │   └── API.js
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  ├── .env.local
  ├── package.json
  └── README.md
```


## Stacks utilizadas

- **React.js**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Um build tool rápido e moderno para projetos de front-end.
- **Tailwind CSS**: Um framework CSS utilitário que facilita a criação de interfaces bonitas e responsivas.
- **React Icons**: Uma biblioteca de ícones para React, que fornece acesso a uma ampla variedade de ícones.
- **MUI Components (Material-UI)**: Uma biblioteca de componentes React que implementa o design do Material Design.
- **TMDb API**: A API oficial do TMDb para obter informações sobre filmes.
- **GitHub Pages**: Um serviço de hospedagem para sites estáticos, usado para hospedar a aplicação.

## Funcionalidades

- **Pesquisa de Filmes**: Os usuários podem pesquisar por filmes usando palavras-chave.
- **Exibição de Detalhes do Filme**: Os usuários podem visualizar detalhes como título, sinopse, avaliação, data de lançamento e poster de cada filme.
- **Interface Responsiva**: A interface é totalmente responsiva, adaptando-se a diferentes tamanhos de tela e dispositivos.
