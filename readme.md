API para Controle de Finanças
💰 Visão Geral
API REST desenvolvida para gerenciamento de finanças pessoais, permitindo o cadastro de usuários e o controle de transações financeiras com autenticação segura.
⚙️ Funcionalidades

Cadastro e autenticação de usuários;
Senhas protegidas com hash via Bcrypt;
Autenticação stateless com token JWT;
Estrutura pronta para registro e consulta de transações financeiras;
Banco de dados relacional com relacionamento entre usuários e transações.

💻 Tecnologias e Recursos

Node.js
Express
PostgreSQL
Prisma ORM
JSON Web Token (JWT)
Bcrypt

🚀 Como Rodar o Projeto
Pré-requisitos: Node.js e PostgreSQL instalados na máquina.
bash# Clone o repositório
git clone <url-do-repositorio>

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz com o seguinte conteúdo:
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/financas"
JWT_SECRET="sua_chave_secreta"

# Rode as migrations para criar as tabelas no banco
npx prisma migrate dev

# Inicie o servidor
node --watch index.js
O servidor vai iniciar na porta 3000.
🔗 Endpoints
POST /cadastro
Cadastra um novo usuário.
json{
  "name": "João Vitor",
  "email": "joao@email.com",
  "password": "123456"
}
POST /login
Autentica o usuário e retorna um token JWT.
json{
  "email": "joao@email.com",
  "password": "123456"
}
Resposta:
json{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
📂 Estrutura do Projeto
├── index.js
├── prisma/
│   └── schema.prisma
├── routes/
│   └── public.js
├── lib/
│   └── prisma.js
├── .env
└── package.json
📘 Aprendizados e Experiência
Durante esse projeto, explorei conceitos fundamentais do back-end, tais como:

Configuração de um servidor HTTP com Express;
Modelagem de banco de dados relacional com Prisma e PostgreSQL;
Implementação de autenticação segura com JWT e Bcrypt;
Estruturação de rotas e separação de responsabilidades na API;
Utilização do Prisma Migrate para versionamento do banco de dados.

Desenvolvido por João Vitor Bolognezi Portela durante o 3º semestre do curso de Engenharia de Software.