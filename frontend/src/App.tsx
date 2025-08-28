import { useEffect, useState } from 'react'
import { getAllTasks, type Task } from './services/api';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentId, setCurrentId] = useState<number>(2);
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task|null>(null);

  useEffect(() => {
    updateTasks();
  },[]);

  async function updateTasks() {
    console.log("updating");
    const currentTasks = await getAllTasks();
    setTasks([...currentTasks]);
    console.log("Tasks updated");
  }

  function formAction(createdNewTask: boolean) {
    updateTasks();
    setShowTaskForm(false);
    setCurrentTask(null);
    
    if (createdNewTask) {
      setCurrentId(id => id + 1);
    }    
  }

  function startForm(task?: Task) {
    console.log("form status", task);

    if (task !== undefined) {
      setCurrentTask(task);
    }
    else {
      setCurrentTask(null);
    }

    setShowTaskForm(true);

    return null;
  }

  return (
    <>
      <h1>Task Management application</h1>
      <h2>By Jonathan Miroshnik</h2>
      { showTaskForm ? 
      <TaskForm task={currentTask} nextId={currentId} onCreate={() => formAction(true)} onUpdate={() => formAction(false)} /> : 
      null }
      <div className='main-div'>
        <div className='create-button-div'>
          <button onClick={() => startForm()}>
            Create Task
          </button>
        </div>
        <div className='main-carousel-div'>
          <TaskList key={"tasks_list_"+tasks.length} tasks={tasks} onUpdate={startForm} />
        </div>
      </div>
    </>
  )
}

export default App
