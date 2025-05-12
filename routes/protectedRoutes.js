import express from 'express';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/admin/dashboard', authenticate, authorize(['Admin']), (req, res) => res.json({ message: 'Admin dashboard' }));
router.get('/user/profile', authenticate, (req, res) => res.json({ message: 'User profile' }));
router.post('/manager/tasks', authenticate, authorize(['Manager']), (req, res) => res.json({ message: 'Task created' }));

export default router;