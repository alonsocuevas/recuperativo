"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importaciones necesarias
const h3_1 = require("h3");
const register_1 = require("./routes/register");
const login_1 = require("./routes/login");
const logout_1 = require("./routes/logout");
const listTasks_1 = require("./routes/listTasks");
const createTask_1 = require("./routes/createTask");
const updateTask_1 = require("./routes/updateTask");
const deleteTask_1 = require("./routes/deleteTask");
const helloWorld_1 = require("./routes/helloWorld");
const app = (0, h3_1.createApp)();
// Rutas
app.use('/api', helloWorld_1.helloWorldRoute);
app.use('/api/auth/register', register_1.registerRoute);
app.use('/api/auth/login', login_1.loginRoute);
app.use('/api/auth/logout', logout_1.logoutRoute);
app.use('/api/todos', listTasks_1.listTasksRoute);
app.use('/api/todos', createTask_1.createTaskRoute);
app.use('/api/todos/:id', updateTask_1.updateTaskRoute);
app.use('/api/todos/:id', deleteTask_1.deleteTaskRoute);
exports.default = app;
// Los archivos de rutas individuales se implementarían en la carpeta "routes" como sigue:
