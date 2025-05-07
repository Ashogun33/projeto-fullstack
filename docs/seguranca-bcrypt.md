# 🔐 Segurança com Bcrypt – Por que não é possível quebrar uma senha com apenas 3 hashes

## ✅ Pergunta

> Se eu obtiver 3 senhas e suas respectivas criptografias, consigo quebrar qualquer senha gerada por esse sistema?

### ❌ Resposta curta: **Não.**

---

## 🧠 Entenda por quê

### 1. 🧂 Salt aleatório

O `bcrypt` gera um hash diferente toda vez que você criptografa a mesma senha.

Mesmo que duas pessoas usem `"senha123"`, os hashes resultantes serão **completamente diferentes**.

Isso acontece porque o `bcrypt` **insere um sal aleatório embutido no hash**.

#### Benefícios:

- Evita ataques de comparação
- Inviabiliza uso de dicionários e rainbow tables
- Aumenta entropia da senha

---

### 2. 🐢 Hash lento por design

O `bcrypt` é propositalmente lento.

Ao definir um fator de custo como `10`, o algoritmo exige várias rodadas de processamento.

Isso torna os ataques de força bruta muito caros computacionalmente.

---

## 📌 Comparativo prático

| Situação                                           | Quebra o sistema? |
|---------------------------------------------------|-------------------|
| Tenho 3 senhas e seus hashes                      | ❌ Não            |
| Tenho 1 hash e tento descobrir a senha por dicionário | ❌ Muito difícil |
| Uso bcrypt com fator de custo 10+ e senhas fortes | ✅ Seguro         |
| Uso MD5 ou SHA1 (sem salt)                        | ❌ Inseguro       |

---

## 🛡️ Boas práticas

- Sempre use `bcrypt` ou `argon2` com sal automático
- Nunca armazene senhas em texto puro
- Rejeite senhas muito curtas (ex: menos de 8 caracteres)

---

### ✨ Resultado

Você implementou um sistema de cadastro **seguro**, alinhado com práticas de mercado, e que protege os dados dos usuários contra vazamentos e ataques.

Mesmo com acesso parcial a alguns hashes e senhas, **nenhuma senha alheia pode ser inferida com facilidade**.