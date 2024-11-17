import { eventHandler, createError } from 'h3';
import { randomBytes, scryptSync } from 'node:crypto';
import { z } from 'valibot';
import { users } from '../data';
const registerSchema = z.object({
  username: z.string().nonempty(),
  name: z.string().nonempty(),
  password: z.string().nonempty()
});
export const registerRoute = eventHandler(async (req) => {
  const body = await useBody(req);
  registerSchema.parse(body);
  const { username, name, password } = body;
  if (users.find(user => user.username === username)) {
    throw createError({ statusCode: 409, statusMessage: 'Conflict: User already exists' });
  }
  const salt = randomBytes(16).toString('hex');
  const hashedPassword = scryptSync(password, salt, 64).toString('hex');
  const storedPassword = `${salt}:${hashedPassword}`;
  users.push({ username, name, password: storedPassword });
  return { username, name };
});