"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let tasks = [{
        id: 1,
        title: "hello",
        description: "example desc",
        completed: false,
        createdAt: new Date("2/23/2024, 2:02:29 PM"),
        priority: 'low'
    }];
router.get('/', getAllTasks);
router.post('/', createNewTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/toggle', toggleTaskCompletionStatus);
function checkTaskValidity(input) {
    return (typeof input?.id === 'number' &&
        typeof input?.title === 'string' &&
        typeof input?.description === 'string' &&
        typeof input?.completed === 'boolean' &&
        // input?.createdAt instanceof Date &&
        ['low', 'medium', 'high'].includes(input?.priority));
}
function getAllTasks(req, res) {
    console.log("Attmepting all task receiving");
    res.json(tasks);
}
function createNewTask(req, res) {
    console.log("Attmepting task creation");
    const newTask = req.body;
    if (!checkTaskValidity(newTask)) {
        return res.status(400).json({ message: 'Invalid Input' });
    }
    const taskIndex = tasks.findIndex(t => t.id === parseInt(newTask.id));
    if (taskIndex !== -1) {
        return res.status(404).json({ message: 'Task already exists' });
    }
    tasks = [newTask, ...tasks];
    res.json({ message: 'Created new Task' });
}
function updateTask(req, res) {
    console.log("Attmepting task updating");
    const { id } = req.params;
    const updatedTask = req.body;
    if (!checkTaskValidity(updatedTask)) {
        return res.status(400).json({ message: 'Invalid Input' });
    }
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
    res.json(tasks[taskIndex]);
}
function deleteTask(req, res) {
    console.log("Attmepting task deletion");
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === parseInt(id));
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Deleted task' });
}
function toggleTaskCompletionStatus(req, res) {
    console.log("Attmepting completion status toggling");
    const { id } = req.params;
    const task = tasks.find(t => t.id === parseInt(id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    task.completed = !task.completed;
    res.json(task);
}
exports.default = router;
