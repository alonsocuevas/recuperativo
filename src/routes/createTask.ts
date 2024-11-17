import { eventHandler } from 'h3';
import { nanoid } from 'nanoid';
import { z } from 'valibot';
import { authenticate } from '../utils/authenticate';
import { tasks } from '../data';
const createTaskSchema = z.object({ title: z.string().nonempty() });
export const createTaskRoute = eventHandler(async (req) => {
  const user = authenticate(req);
  const body = await useBody(req);
  createTaskSchema.parse(body);
  const newTask = { id: nanoid(), title: body.title, completed: false };
  tasks.push(newTask);
  return newTask;
});