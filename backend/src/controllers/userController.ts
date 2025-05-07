import express from 'express';
const { Request, Response } = express;

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { db } from '../database.ts';

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role = 'user' } = req.body;

  // Verifica campos obrigatórios
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  // Verifica se role é válido
  if (role !== 'user' && role !== 'admin') {
    return res.status(400).json({ error: 'Tipo de usuário inválido.' });
  }

  try {
    // Verifica se o e-mail já está cadastrado
    const existing = await db.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ error: 'E-mail já cadastrado.' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insere novo usuário no banco
    const result = await db.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role',
      [name, email, hashedPassword, role]
    );

    res.status(201).json({ message: 'Usuário criado com sucesso.', user: result.rows[0] });
  } catch (err) {
    console.error('Erro ao registrar usuário:', err);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

// Realiza login
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios.' });
  }

  try {
    // Verifica se o usuário existe
    const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado.' });
    }

    // Compara a senha fornecida com o hash salvo
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }

    // Diagnóstico direto
    console.log('🔍 JWT_SECRET:', process.env.JWT_SECRET);
    console.log('🔍 JWT_EXPIRES_IN:', process.env.JWT_EXPIRES_IN);



    // ✅ Gera o token JWT
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    // ✅ Retorna o token e os dados do usuário
    res.json({
      message: 'Login realizado com sucesso.',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

