import type { Task } from "../services/api";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[]
    onUpdate: (inputTask: Task | undefined) => null
}

// Display all tasks in an endless carousel
function TaskList(props: TaskListProps) {
    return (
        <div>
            { props.tasks ?
            props.tasks.map(t => (<TaskItem key={"task_item_" + t.id} task={t} onUpdate={props.onUpdate} />)) 
            : null }
        </div>
    );
}

export default TaskList;