import express, { Request, Response } from 'express';

const router = express.Router();

interface Task { 
    id: number, 
    title: string, 
    description: string, 
    completed: boolean, 
    createdAt: Date, 
    priority: 'low' | 'medium' | 'high' 
}

let tasks: Task[] = []

router.get('/', getAllTasks);
router.post('/', createNewTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/toggle', toggleTaskCompletionStatus);

function getAllTasks(req: Request, res: Response) {
    res.json(tasks)
}

function createNewTask(req: Request, res: Response) {
    const newTask = req.body;
    tasks = [newTask, ...tasks]

    res.json({ message: 'Created new Task' })
}

function updateTask(req: Request, res: Response) {
    // const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    // if (taskIndex === -1) {
    //     return res.status(404).json({ message: 'Task not found' });
    // }

    // tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };

    // res.json(tasks[taskIndex]);
}

function deleteTask(req: Request, res: Response) {
    const taskToDelete = req.body;
    tasks = tasks.filter(t => t.id !== taskToDelete.id)

    res.json({ message: 'Deleted task' })
}

function toggleTaskCompletionStatus(req: Request, res: Response) {
    const { id } = req.params;

    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    task.completed = !task.completed;
    res.json(task);
}

export default router;