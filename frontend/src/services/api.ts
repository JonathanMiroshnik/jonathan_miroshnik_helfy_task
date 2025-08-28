import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000'

export interface Task {
  id: number, 
  title: string, 
  description: string, 
  completed: boolean, 
  createdAt: Date, 
  priority: 'low' | 'medium' | 'high' 
}

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

export const getAllTasks = async (): Promise<Task[]> => {
    try {
        const response = await api.get<Task[]>('/api/tasks');
        console.log("tasks:", response.data);

        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const createTask = async (newTask: Task): Promise<Task[]> => {
    try {
        const response = await api.post<Task[]>('/api/tasks', newTask);
        console.log("tasks:", response.data);

        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

export const deleteTask = async (id: number): Promise<string> => {
    try {
        const response = await api.delete<string>('/api/tasks/' + id);
        console.log("tasks:", response.data);

        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};

export const updateTask = async (updatedTask: Task): Promise<Task> => {
    try {
        const response = await api.put<Task>('/api/tasks/' + updatedTask.id, updatedTask);
        console.log("tasks:", response.data);

        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};