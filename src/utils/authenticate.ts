import { createError } from 'h3';
import { users } from '../data';
export const authenticate = (req: any) => {
  const token = req.headers['x-authorization'];
  if (!token || typeof token !== 'string') {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
  const user = users.find(u => u.token === token);
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  }
  return user;
};