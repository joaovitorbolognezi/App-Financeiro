# API para Controle de Finanças

## 💰 Visão Geral

API REST em desenvolvimento para gerenciamento de finanças pessoais, permitindo o cadastro de usuários e o controle de transações financeiras com autenticação segura.

## ⚙️ Funcionalidades

- Cadastro e autenticação de usuários
- Senhas protegidas com hash via Bcrypt
- Autenticação stateless com token JWT
- Estrutura pronta para registro e consulta de transações financeiras
- Banco de dados relacional com relacionamento entre usuários e transações

## 💻 Tecnologias

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JSON Web Token (JWT)
- Bcrypt

## 📂 Estrutura do Projeto

```
├── index.js
├── prisma/
│   └── schema.prisma
├── routes/
│   └── public.js
├── lib/
│   └── prisma.js
├── .env
└── package.json
```

## 📘 Aprendizados e Experiência

Durante esse projeto, explorei conceitos fundamentais do back-end, tais como:

- Configuração de um servidor HTTP com Express
- Modelagem de banco de dados relacional com Prisma e PostgreSQL
- Implementação de autenticação segura com JWT e Bcrypt
- Estruturação de rotas e separação de responsabilidades na API
- Utilização do Prisma Migrate para versionamento do banco de dados

Desenvolvido por João Vitor Bolognezi Portela durante o 3º semestre do curso de Engenharia de Software.
