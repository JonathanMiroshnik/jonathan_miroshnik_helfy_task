import { deleteTask, type Task } from "../services/api";
import "../styles/TaskItem.css"

interface TaskItemProps {
    task: Task
    onUpdate: (inputTask: Task | undefined) => null
}

// Individual task display with actions
function TaskItem(props: TaskItemProps) {
    return (
        <div className="task-item-main">
            { props.task &&
            (<div className={"priority-div-" + props.task.priority }>
                <div className="task-id">ID: {props.task.id}</div>
                <h3 className="task-title">{props.task.title}</h3>
                <p className="task-description">{props.task.description}</p>
                <div className="task-status">
                    Status: {props.task.completed ? 'Completed' : 'Pending'}
                </div>
                <div className="task-created">
                    Created: {props.task.createdAt.toString()}
                </div>
                <div className="task-priority">
                    Priority: {props.task.priority}
                </div>
                
                <div className="task-actions">
                    <button 
                        className="btn-update" 
                        onClick={() => props.onUpdate(props.task)}
                    >
                        Update Task
                    </button>
                    <button 
                        className="btn-delete" 
                        onClick={() => deleteTask(props.task.id)}
                    >
                        Delete Task
                    </button>
                </div>
            </div>
            )}
        </div>
    );
}

export default TaskItem;