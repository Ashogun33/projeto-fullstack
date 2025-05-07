
# 🔐 Autenticação JWT no Projeto Fullstack Base

Este documento explica o fluxo completo de autenticação com JSON Web Tokens (JWT) implementado neste backend.

---

## 🎯 Objetivo

Permitir que usuários se autentiquem com e-mail e senha, e usem um token JWT para acessar rotas protegidas, sem necessidade de manter sessões no servidor.

---

## 🧱 Componentes envolvidos

- `bcrypt`: para criptografia segura de senhas
- `jsonwebtoken`: para criação e validação de tokens
- `.env`: para armazenar a chave secreta e tempo de expiração
- Middleware `authenticate`: para proteger rotas privadas
- Rota `/profile`: exemplo de rota protegida por token

---

## 🚦 Fluxo de autenticação

1. **Cadastro** (`POST /register`)
   - Nome, e-mail e senha são enviados
   - Senha é criptografada com `bcrypt`
   - Usuário é salvo no banco

2. **Login** (`POST /login`)
   - E-mail e senha são verificados
   - Se válidos, gera um token JWT:
     ```json
     {
       "id": 1,
       "name": "Vandilson Alves",
       "email": "vandilson@example.com",
       "iat": 1715000000,
       "exp": 1715003600
     }
     ```
   - Token é retornado ao cliente

3. **Acesso a rotas protegidas**
   - Cliente envia o token no header:
     ```
     Authorization: Bearer <token>
     ```
   - O middleware `authenticate` valida o token
   - A rota acessa `req.user` com os dados decodificados

---

## 🛡️ Exemplo de middleware

```ts
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: 'Token inválido ou expirado.' });
  }
};
```

---

## ✅ Teste com `curl`

Login:
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"email": "vandilson@example.com", "password": "senha123"}'
```

Rota protegida:
```bash
curl http://localhost:3000/profile \
  -H "Authorization: Bearer <seu_token_aqui>"
```

---

## 📦 Variáveis no `.env`

```env
JWT_SECRET=segredo_super_secreto123
JWT_EXPIRES_IN=1h
```

---

## 🔚 Conclusão

Com JWT, você tem uma API moderna, segura e escalável — pronta para frontend, apps móveis e múltiplos ambientes.
