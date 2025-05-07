import express from 'express';
const { Request, Response, NextFunction } = express;

export const authorize = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || req.user.role !== requiredRole) {
      return res.status(403).json({ error: 'Acesso negado: privilégios insuficientes.' });
    }

    next();
  };
};
