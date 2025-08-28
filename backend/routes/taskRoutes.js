import express from 'express';
import { Router } from 'express';

const router = new Router();

router.get('/', getAllTasks());
router.post('/', createNewTask());
router.put('/:id', updateTask());
router.delete('/:id', deleteTask());
router.patch('/:id/toggle', toggleTaskCompletionStatus());

export default router;