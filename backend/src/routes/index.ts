import { Router } from 'express';
import { healthCheck } from '../controllers/healthCheck.ts';
import { registerUser, loginUser } from '../controllers/userController.ts';
import { authenticate } from '../middlewares/authMiddleware.ts';

import {
  getTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask
} from '../controllers/taskController.ts';

const router = Router();

router.get('/', healthCheck);
router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Acesso autorizado!', user: req.user });
});

export default router;
