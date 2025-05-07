
# 🚀 Projeto Fullstack Base – Backend

Este repositório contém a versão **MVP do backend** do Projeto Fullstack Base. Ele foi desenvolvido com foco em segurança, boas práticas e estrutura profissional, ideal para servir de base real para aplicações modernas e para compor um portfólio técnico.

---

## 📌 Funcionalidades MVP

- ✅ Cadastro de usuários com senha criptografada (`bcrypt`)
- ✅ Login com autenticação JWT
- ✅ Proteção de rotas com middleware (`authenticate`)
- ✅ Controle de acesso por tipo de usuário (`authorize`)
- ✅ Rota protegida `/profile`
- ✅ Rota exclusiva para administradores `/admin`
- ✅ CRUD de tarefas (em memória ou banco)
- ✅ Banco de dados PostgreSQL via Docker
- ✅ Estrutura organizada e modular com TypeScript

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express.js
- TypeScript
- PostgreSQL (via Docker)
- JWT (`jsonwebtoken`)
- `bcrypt` para senhas
- Docker e Docker Compose
- Git e GitHub

---

## 🔐 Segurança Implementada

- Hash seguro de senhas
- Token JWT com dados essenciais do usuário
- Middleware para autenticação e autorização
- `.env` com variáveis de ambiente (exemplo fornecido)

---

## 🚀 Como Executar

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/projeto-fullstack.git
cd projeto-fullstack/backend

# Instale as dependências
npm install

# Crie um arquivo .env com base no .env.example
cp .env.example .env

# Inicie o banco de dados com Docker
docker compose up -d

# Rode o servidor em modo desenvolvimento
npm run dev
```

---

## 🧪 Rotas Importantes

- `POST /register` – Cadastro de usuário
- `POST /login` – Login e geração de token JWT
- `GET /profile` – Rota protegida (usuário autenticado)
- `GET /admin` – Rota restrita (admin apenas)
- `GET /tasks`, `POST /tasks` etc. – CRUD de tarefas

---

## 🧠 Documentação Técnica

Documentos complementares estão disponíveis no diretório `docs/`, incluindo:

- `jwt-auth-flow.md`
- `seguranca-bcrypt.md`
- `versao-mvp.md`

---

## 📄 Licença

Este projeto está licenciado sob os termos da Licença MIT.

---

> Desenvolvido por **Vandilson A. Jesus** – versão `v1.0.0`
