interface TaskFilterProps {
    completionsStatus: boolean
}

// Filter tasks by completion status
function TaskFilter(props: TaskFilterProps) {
    return (
        <div>
            { props.completionsStatus }
        </div>
    );
}

export default TaskFilter;