import { eventHandler, createError } from 'h3';
import { authenticate } from '../utils/authenticate';
import { tasks } from '../data';
export const deleteTaskRoute = eventHandler((req) => {
  const user = authenticate(req);
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found: Task does not exist' });
  }
  tasks.splice(taskIndex, 1);
  return { statusCode: 204, statusMessage: 'No Content' };
});