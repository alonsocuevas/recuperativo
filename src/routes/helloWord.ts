import { eventHandler } from 'h3';
export const helloWorldRoute = eventHandler(() => 'Hello World!');