import { useState } from "react";
import { createTask, updateTask, type Task } from "../services/api";
import "../styles/TaskForm.css"

interface TaskFormProps {
    task: Task | null | undefined
    nextId: number
    onCreate: () => void;
    onUpdate: () => void;
}

// Form for creating/editing tasks
function TaskForm(props: TaskFormProps) {
    const [task, setTask] = useState<Task>({
        id: props.task ? props.task.id : props.nextId,
        title: props.task ? props.task.title : '',
        description: props.task ? props.task.description : '',
        createdAt: props.task ? props.task.createdAt : new Date(),
        completed: props.task ? props.task.completed : false,
        priority: props.task ? props.task.priority : 'low'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', task);

        if (props.task) {
            console.log("Updaing task: ", task.id);
            updateTask(task)
            props.onUpdate();

            return;
        }

        console.log("Creating task: ", task.id);

        createTask(task);
        props.onCreate();
    };

    return (
        <div className="task-form-container">
            <form className="task-form">
                <input
                    className="form-input"
                    placeholder="Title"
                    value={task.title}
                    onChange={(e) => setTask(t => ({...t, title: e.target.value}))}
                    required
                />
                <textarea
                    className="form-textarea"
                    placeholder="Description"
                    value={task.description}
                    onChange={(e) => setTask(t => ({...t, description: e.target.value}))}
                />
                <select
                    className="form-select"
                    value={task.priority}
                    onChange={(e) => setTask(t => ({...t, priority: e.target.value as 'low' | 'medium' | 'high'}))}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <label className="form-checkbox-label">
                    <input
                    className="form-checkbox"
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => setTask(t => ({...t, completed: e.target.checked}))}
                    />
                    Completed
                </label>
                <button className="form-submit-btn" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default TaskForm;