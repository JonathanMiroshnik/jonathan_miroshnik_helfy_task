import { useEffect, useState } from "react";
import { createTask, updateTask, type Task } from "../services/api";

interface TaskFormProps {
    task: Task | null
    currentId: number
}

// Form for creating/editing tasks
function TaskForm(props: TaskFormProps) {
    const [task, setTask] = useState<Task>({
        id: props.task ? props.task.id : props.currentId,
        title: '',
        description: '',
        createdAt:  props.task ? props.task.createdAt : new Date(),
        completed: false,
        priority: 'low'
    });

    // TODO:
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', task);

        if (!props.task) {
            updateTask(task)

            return;
        }

        createTask(task);
    };

    return (
        <div>
            <form className="task-input-form">
                <input
                    placeholder="Title"
                    value={task.title}
                    onChange={(e) => setTask({...task, title: e.target.value})}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={task.description}
                    onChange={(e) => setTask({...task, description: e.target.value})}
                />
                <select
                    value={task.priority}
                    onChange={(e) => setTask({...task, priority: e.target.value as 'low' | 'medium' | 'high'})}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <label>
                    <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => setTask({...task, completed: e.target.checked})}
                    />
                    Completed
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TaskForm;