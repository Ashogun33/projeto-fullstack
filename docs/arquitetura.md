
# 🧱 Arquitetura do Projeto Fullstack Base – Backend

Este documento apresenta a arquitetura geral da versão MVP do backend.

---

## 🧩 Estrutura de Pastas

```
backend/
├── src/
│   ├── controllers/       ← Lógica das rotas (User, Task, Health)
│   ├── routes/            ← Define e agrupa as rotas
│   ├── middlewares/       ← Middlewares de autenticação e autorização
│   ├── database.ts        ← Conexão com PostgreSQL
│   └── server.ts          ← Ponto de entrada da aplicação
├── Dockerfile             ← Imagem do backend
├── docker-compose.yml     ← Sobe backend + banco
├── .env / .env.example    ← Variáveis de ambiente
├── tsconfig.json          ← Configuração do TypeScript
```

---

## 🔁 Fluxo Geral da Aplicação

1. Requisição HTTP chega ao Express
2. `routes/index.ts` direciona para o controlador
3. Se a rota for protegida:
   - `authenticate` verifica o token JWT
   - `authorize('admin')` (opcional) verifica o perfil
4. O controller executa a lógica
5. Banco PostgreSQL realiza consultas via `pg`
6. A resposta JSON é enviada

---

## 📦 Tecnologias principais

- Node.js + Express
- TypeScript
- PostgreSQL (Docker)
- JWT para autenticação
- bcrypt para segurança de senha

---

> Este backend está pronto para ser consumido por um frontend em React, ou integrado a apps móveis.
