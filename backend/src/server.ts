import express, { Request, Response } from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running!');
});

// Server initialisation
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
