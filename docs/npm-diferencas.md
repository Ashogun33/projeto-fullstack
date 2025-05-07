# 📦 Diferença entre `npm install` e `npm install -D`

## 🎯 Analogia prática: Montando uma clínica de estética

Imagine que você está montando uma clínica ou escritório profissional. Você precisará de dois tipos de coisas:

---

## 🟩 Ferramentas de produção (visíveis para o cliente)

Essas são ferramentas **que o cliente final vê e usa**.  
No projeto Node.js, são bibliotecas que **vão junto para produção** — fazem parte do funcionamento da aplicação.

### Exemplos:

- A maca
- O laser
- Os cremes
- A cadeira de atendimento

### No Node.js:

```bash
npm install express
npm install pg
```

Essas bibliotecas entram em **"dependencies"** no `package.json`.

---

## 🟨 Ferramentas de desenvolvimento (internas)

Essas são ferramentas **que só você usa durante a montagem, testes ou manutenção**.  
No Node.js, são bibliotecas que **ajudam apenas durante o desenvolvimento**.

### Exemplos:

- Trena
- Chave de fenda
- Manual de instruções
- Lista de verificação

### No Node.js:

```bash
npm install -D nodemon
npm install -D @types/bcrypt
```

Essas bibliotecas entram em **"devDependencies"** no `package.json`.

---

## ✅ Resumo

| Tipo de item               | Exemplo real            | Comando npm               | Vai para produção? |
|---------------------------|--------------------------|---------------------------|---------------------|
| Cliente usa               | Maca, laser, cremes      | `npm install express`     | ✅ Sim              |
| Só você usa na montagem   | Trena, checklist         | `npm install -D nodemon`  | ❌ Não              |

---

**Lembrete:**  
A flag `-D` é a abreviação de `--save-dev`, e serve para indicar que a dependência é apenas de desenvolvimento.