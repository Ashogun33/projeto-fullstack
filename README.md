# Projeto Fullstack Base

Este repositório contém a estrutura inicial de um projeto **Fullstack com Node.js + Express**, voltado para desenvolvimento de APIs modernas com backend escalável e banco de dados PostgreSQL.

> 🎯 Propósito: Servir como ponto de partida para aplicações profissionais que podem ser implantadas em ambientes reais e utilizados como portfólio para o mercado internacional.

---

## 📦 Tecnologias

- [x] **Node.js** + **Express.js**
- [x] **TypeScript**
- [x] **Docker** + **Docker Compose**
- [x] **PostgreSQL**
- [x] **pg** (PostgreSQL driver oficial para Node)
- [x] **Git** + **GitHub**
- [ ] Autenticação JWT
- [ ] Testes (automatizados)
- [ ] CI/CD
- [ ] Frontend (React)

---

## 🚀 Como executar

```bash
git clone https://github.com/seu-usuario/projeto-fullstack.git
cd projeto-fullstack/backend

# Instalar dependências
npm install

# Subir banco de dados com Docker
docker compose up -d

# Rodar servidor de desenvolvimento
npm run dev
```

---

## 🧱 Estrutura de Pastas

```
projeto-fullstack/
└── backend/
    ├── src/
    │   ├── controllers/      # Lógica das rotas (taskController.ts)
    │   ├── routes/           # Definição das rotas
    │   ├── database.ts       # Conexão com PostgreSQL
    │   └── server.ts         # Entrada principal da aplicação
    ├── package.json
    ├── tsconfig.json
    └── docker-compose.yml
```

---

## 📌 Funcionalidades Iniciais

- [x] Health Check (`GET /`)
- [x] CRUD de Tarefas:
  - [x] `GET /tasks` – Listar todas as tarefas
  - [x] `GET /tasks/:id` – Buscar tarefa por ID
  - [x] `POST /tasks` – Criar nova tarefa
  - [x] `PUT /tasks/:id` – Atualizar título ou status
  - [x] `DELETE /tasks/:id` – Remover tarefa
- [ ] Cadastro e login de usuários
- [ ] Autenticação JWT
- [ ] Testes automatizados
- [ ] Integração com frontend (React)

---

## 🔁 Exemplo de uso (curl)

```bash
# Criar tarefa
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Estudar PostgreSQL"}'

# Marcar como concluída
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# Listar todas
curl http://localhost:3000/tasks
```

---

## 📄 Licença

Este projeto está licenciado sob os termos da [Licença MIT](LICENSE).  
Sinta-se livre para usar, modificar e distribuir — com os devidos créditos ao autor.

---