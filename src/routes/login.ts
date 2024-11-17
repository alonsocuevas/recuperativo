import { eventHandler, createError } from 'h3';
import { scryptSync, randomBytes } from 'node:crypto';
import { z } from 'valibot';
import { users } from '../data';
const loginSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty()
});
export const loginRoute = eventHandler(async (req) => {
  const body = await useBody(req);
  loginSchema.parse(body);
  const { username, password } = body;
  const user = users.find(user => user.username === username);
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized: User not found' });
  }
  const [salt, key] = user.password.split(':');
  const hashedBuffer = scryptSync(password, salt, 64).toString('hex');
  if (hashedBuffer !== key) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized: Incorrect password' });
  }
  const token = randomBytes(48).toString('hex');
  user.token = token;
  return { username: user.username, name: user.name, token };
});