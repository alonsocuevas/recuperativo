// Importaciones necesarias
import { createApp } from 'h3';
import { randomBytes, scryptSync } from 'node:crypto';
import { z } from 'valibot';
import { nanoid } from 'nanoid';
import { registerRoute } from './routes/register';
import { loginRoute } from './routes/login';
import { logoutRoute } from './routes/logout';
import { listTasksRoute } from './routes/listTasks';
import { createTaskRoute } from './routes/createTask';
import { updateTaskRoute } from './routes/updateTask';
import { deleteTaskRoute } from './routes/deleteTask';
import { helloWorldRoute } from './routes/helloWorld';

const app = createApp();

// Rutas
app.use('/api', helloWorldRoute);
app.use('/api/auth/register', registerRoute);
app.use('/api/auth/login', loginRoute);
app.use('/api/auth/logout', logoutRoute);
app.use('/api/todos', listTasksRoute);
app.use('/api/todos', createTaskRoute);
app.use('/api/todos/:id', updateTaskRoute);
app.use('/api/todos/:id', deleteTaskRoute);

export default app;

// Los archivos de rutas individuales se implementarían en la carpeta "routes" como sigue: