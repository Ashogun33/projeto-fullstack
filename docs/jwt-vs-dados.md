# 🔐 JWT vs Dados do Usuário – O que fica no token e o que permanece no servidor?

## 🎯 Propósito deste documento

Este material responde à dúvida comum: **“As informações do usuário ficam todas dentro do JWT?”**

Vamos separar os conceitos de forma clara e didática para uso no desenvolvimento de aplicações seguras.

---

## ✅ O que é JWT?

JWT (JSON Web Token) é um **token digital** que:

- Identifica **quem é o usuário**
- Contém informações mínimas, como:
  - `id`, `email`, `role`, `exp` (expiração)
- É **assinado** digitalmente pelo servidor
- É enviado pelo **cliente a cada requisição** (no header Authorization)

---

## 🧱 O que o JWT **deve conter**

| Informação                         | Pode estar no JWT? | Por quê?                                        |
|------------------------------------|---------------------|-------------------------------------------------|
| ID do usuário (`id`)               | ✅ Sim              | Identifica quem está autenticado                |
| Nome (`name`)                      | ✅ Opcional         | Informação leve, útil para interface            |
| Permissão (`role`: "admin", etc.)  | ✅ Sim              | Permite autorizar acessos de forma rápida       |
| Data de expiração (`exp`)          | ✅ Obrigatório      | Garante validade do token                       |

---

## 🚫 O que **não deve** ficar no JWT

| Informação                                | Colocar no JWT? | Motivo                                                   |
|-------------------------------------------|------------------|-----------------------------------------------------------|
| Histórico de atendimentos                 | ❌ Nunca          | Dados grandes, sensíveis e mutáveis                      |
| Último valor pago, saldo financeiro       | ❌ Nunca          | Podem mudar a qualquer momento                           |
| Trilha de tratamentos, locais atendidos   | ❌ Nunca          | Mudanças exigiriam reemissão de token                    |
| Preferências detalhadas do usuário        | ❌ Nunca          | Melhor buscar direto no banco de dados                   |

---

## 🗂️ Onde ficam essas informações?

**No banco de dados.**

> O JWT é apenas a “chave de entrada”. Os dados reais continuam no servidor e são acessados por rotas autenticadas.

---

## 🧪 Exemplo prático

### 🔐 JWT
```json
{
  "id": 1,
  "name": "Vandilson Alves",
  "role": "user",
  "exp": 1715451600
}
```

### 📡 API protegida
- `GET /historico` → busca histórico de atendimentos no banco
- `GET /saldo` → consulta saldo atualizado
- `GET /agenda` → acessa agenda do usuário

---

## 🧠 Conclusão

O JWT **não é um banco de dados**.  
Ele serve para **provar a identidade do usuário**, garantindo acesso seguro.

**Todas as demais informações devem ser consultadas no banco, após o login.**

---

### 👣 Caminho ideal:

1. Cliente faz login e recebe o JWT
2. Cliente envia o token em cada requisição
3. Servidor valida o token e retorna os dados reais sob demanda

> Isso garante segurança, flexibilidade e dados sempre atualizados.