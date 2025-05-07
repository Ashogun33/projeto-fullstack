import { Router } from 'express';
import { healthCheck } from '../controllers/healthCheck.ts';
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

export default router;
