# NLW Heat

Ultimo evento next level week do ano de 2021, realizado pela Rocketseat.

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
<br/>[Clique aqui para visitar o projeto!](https://nlw7heat.vercel.app/)

## Back-end

No back-end foi trabalhado com a biblioteca prisma que é um ORM (Mapeamento objeto-relacional) que ajudou a simplicar o acesso ao banco de dados, a biblioteca CORS que fornece um middleware que habilita a coneção com várias opções, a biblioteca socket.io para criar um comunicação em tempo real, e a biblioteca jsonwebtoken que fornece a criação de tokens.

### Intalação

Utilize <code>yarn add</code> ou <code>npm install</code> para instalar o projeto.
<br/>
Para criar as migrations <code>yarn prisma migrate dev</code>.
<br/>
Antes de inicializar, crie um arquivo ".env" e adicione nele as variáveis de ambiente

```
GITHUB_CLIENT_SECRET= 'sua cheve criada no github'
GITHUB_CLIENT_ID= 'sua identifição criada pelo github'
JWT_SECRET= 'sua chave de segurança'
```

Para inicializar o projeto em desenvolvimento <code>yarn dev</code>.

## Front-end

No Front-end foi utilizado a biblioteca axios para ajudar na comunicacao com APIs, a biblioteca socket.io para criar um comunicação em tempo real.

### Intalação

Utilize <code>yarn add</code> ou <code>npm install</code> para instalar o projeto.
<br/>
Para inicializar o projeto em desenvolvimento <code>yarn dev</code>.
