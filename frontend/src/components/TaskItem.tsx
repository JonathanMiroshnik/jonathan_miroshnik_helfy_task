import { deleteTask, type Task } from "../services/api";

interface TaskItemProps {
    task: Task
    onUpdate: (inputTask: Task | undefined) => null
}

// updateTask({
// id: 2, 
// title: "hello5", 
// description: "example desc2", 
// completed: false, 
// createdAt: new Date("2/23/2024, 2:02:29 PM"), 
// priority: 'medium'
// })}

// Individual task display with actions
function TaskItem(props: TaskItemProps) {
    return (
        <>
        { props.task ?
        (<div>
            {props.task.id}
            {props.task.title}
            {props.task.description}
            {props.task.completed}
            {props.task.createdAt.toString()}
            {props.task.priority}

            <button onClick={() => props.onUpdate(props.task)}>
                Update Task
            </button>
            <button onClick={() => deleteTask(props.task.id)}>
                Delete Task
            </button>
        </div>) 
        : null }
        </>
    );
}

export default TaskItem;