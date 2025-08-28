import express from 'express';
const app = express();
const port = 5000;

const taskRoutes = ;

// interface Task {
//     id: number,
//     title: string,
//     description: string,
//     completed: boolean,
//     createdAt: Date,
//     priority: 'low' | 'medium' | 'high'
// }

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
