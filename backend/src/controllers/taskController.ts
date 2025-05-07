import express from 'express';
import type { Request, Response } from 'express'; // ✅ é o jeito certo e seguro nesse contexto
import { db } from '../database.ts';

// Interface que define uma Tarefa
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Simula um banco de dados em memória
//let tasks: Task[] = [];
//let nextId = 1;

// Lista todas as tarefas
export const getTasks = async (_req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM tasks ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar tarefas:', err);
    res.status(500).json({ error: err.message });
  }
};

// Cria uma nova tarefa
export const createTask = async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Título é obrigatório.' });
  }

  try {
    const result = await db.query(
      'INSERT INTO tasks (title) VALUES ($1) RETURNING *',
      [title]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao criar tarefa:', err);
    res.status(500).json({ error: 'Erro ao criar tarefa.' });
  }
};

// Busca uma tarefa pelo ID
export const getTaskById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await db.query('SELECT * FROM tasks WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao buscar tarefa:', err);
    res.status(500).json({ error: 'Erro ao buscar tarefa.' });
  }
};

// Atualiza uma tarefa
export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  if (title !== undefined && typeof title !== 'string') {
    return res.status(400).json({ error: 'Título inválido.' });
  }

  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ error: 'Status inválido (use true ou false).' });
  }

  try {
    const result = await db.query(
      'UPDATE tasks SET title = COALESCE($1, title), completed = COALESCE($2, completed) WHERE id = $3 RETURNING *',
      [title, completed, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao atualizar tarefa:', err);
    res.status(500).json({ error: 'Erro ao atualizar tarefa.' });
  }
};

// Deleta uma tarefa
export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }

    res.json({ message: 'Tarefa removida com sucesso.', tarefa: result.rows[0] });
  } catch (err) {
    console.error('Erro ao deletar tarefa:', err);
    res.status(500).json({ error: 'Erro ao deletar tarefa.' });
  }
};

