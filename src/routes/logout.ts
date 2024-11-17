import { eventHandler, createError } from 'h3';
import { authenticate } from '../utils/authenticate';
export const logoutRoute = eventHandler((req) => {
  const user = authenticate(req);
  user.token = undefined;
  return { statusCode: 204, statusMessage: 'No Content' };
});
