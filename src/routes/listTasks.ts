import { eventHandler } from 'h3';
import { authenticate } from '../utils/authenticate';
import { tasks } from '../data';
export const listTasksRoute = eventHandler((req) => {
  authenticate(req);
  return tasks;
});