import type { Task } from "../services/api";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[]
    onUpdate: (inputTask: Task | undefined) => null
}

// Display all tasks in an endless carousel
function TaskList(props: TaskListProps) {
    return (
        <>
            { props.tasks ?
            props.tasks.map(t => (<div key={"task_item_" + t.id}><TaskItem task={t} onUpdate={props.onUpdate} /></div>)) 
            : null }
        </>
    );
}

export default TaskList;