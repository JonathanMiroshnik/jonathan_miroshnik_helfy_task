import { useEffect, useState } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const API_BASE_URL = 'http://localhost:4000'

interface Task {
  id: number, 
  title: string, 
  description: string, 
  completed: boolean, 
  createdAt: Date, 
  priority: 'low' | 'medium' | 'high' 
}

function App() {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
  });

  const getAllTasks = async (): Promise<Task[]> => {
    try {
      const response = await api.get<Task[]>('/api/tasks');
      console.log("tasks:", response.data);

      return response.data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  };

  const createTask = async (newTask: Task): Promise<Task[]> => {
    try {
      const response = await api.post<Task[]>('/api/tasks', newTask);
      console.log("tasks:", response.data);

      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  };

  const deleteTask = async (id: number): Promise<string> => {
    try {
      const response = await api.delete<string>('/api/tasks/' + id);
      console.log("tasks:", response.data);

      return response.data;
    } catch (error) {
      console.error('Error deleting task:', error);
      throw error;
    }
  };

  const updateTask = async (updatedTask: Task): Promise<Task> => {
    try {
      const response = await api.put<Task>('/api/tasks/' + updatedTask.id, updatedTask);
      console.log("tasks:", response.data);

      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  };

  useEffect(() => {
    getAllTasks()
  },[]);

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
        <button onClick={() => createTask({
                                          id: 2, 
                                          title: "hello2", 
                                          description: "example desc2", 
                                          completed: false, 
                                          createdAt: new Date("2/23/2024, 2:02:29 PM"), 
                                          priority: 'medium'
                                        })}>
          Create Task
        </button>
        <button onClick={() => updateTask({
                                          id: 2, 
                                          title: "hello5", 
                                          description: "example desc2", 
                                          completed: false, 
                                          createdAt: new Date("2/23/2024, 2:02:29 PM"), 
                                          priority: 'medium'
                                        })}>
          Update Task
        </button>
        <button onClick={() => deleteTask(1)}>
          Delete Task
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
