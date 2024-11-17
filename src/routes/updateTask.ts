import { eventHandler, createError } from 'h3';
import { z } from 'valibot';
import { authenticate } from '../utils/authenticate';
import { tasks } from '../data';
const updateTaskSchema = z.object({
  title: z.string().optional(),
  completed: z.boolean().optional()
});
export const updateTaskRoute = eventHandler(async (req) => {
  const user = authenticate(req);
  const body = await useBody(req);
  updateTaskSchema.parse(body);
  const { id } = req.params;
  const task = tasks.find(task => task.id === id);
  if (!task) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found: Task does not exist' });
  }
  if (body.title !== undefined) task.title = body.title;
  if (body.completed !== undefined) task.completed = body.completed;
  return task;
});