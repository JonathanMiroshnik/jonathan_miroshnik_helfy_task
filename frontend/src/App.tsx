import { useEffect, useState } from 'react'
import { createTask, getAllTasks, type Task } from './services/api';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentId, setCurrentId] = useState<number>(0);
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task|null>(null);

  useEffect(() => {
    updateTasks();
  },[]);

  async function updateTasks() {
    const currentTasks = await getAllTasks();
    setTasks(currentTasks);
  }

  function startForm(task?: Task) {
    if (task) {
      setCurrentTask(task);
    }
    else {
      setCurrentTask(null);
    }

    setShowTaskForm(true);

    // TODO: need this?
    return null;
  }

  // {
  //   id: 2, 
  //   title: "hello2", 
  //   description: "example desc2", 
  //   completed: false, 
  //   createdAt: new Date("2/23/2024, 2:02:29 PM"), 
  //   priority: 'medium'
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        { showTaskForm ? <TaskForm task={currentTask} currentId={currentId}/>: null }
        <TaskList tasks={tasks} onUpdate={startForm} />
        <button onClick={() => startForm()}>
          Create Task
        </button>
      </div>
    </>
  )
}

export default App
