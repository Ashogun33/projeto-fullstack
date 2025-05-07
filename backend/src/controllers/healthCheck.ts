import express from 'express';
const { Request, Response } = express;

export const healthCheck = (_req: Request, res: Response) => {
  console.log('🔍 Requisição recebida no /');
  res.json({ status: 'ok', message: 'API online!' });
};
