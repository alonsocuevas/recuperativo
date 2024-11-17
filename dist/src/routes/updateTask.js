"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskRoute = void 0;
const h3_1 = require("h3");
const valibot_1 = require("valibot");
const authenticate_1 = require("../utils/authenticate");
const data_1 = require("../data");
const updateTaskSchema = valibot_1.z.object({
    title: valibot_1.z.string().optional(),
    completed: valibot_1.z.boolean().optional()
});
exports.updateTaskRoute = (0, h3_1.eventHandler)(async (req) => {
    const user = (0, authenticate_1.authenticate)(req);
    const body = await useBody(req);
    updateTaskSchema.parse(body);
    const { id } = req.params;
    const task = data_1.tasks.find(task => task.id === id);
    if (!task) {
        throw (0, h3_1.createError)({ statusCode: 404, statusMessage: 'Not Found: Task does not exist' });
    }
    if (body.title !== undefined)
        task.title = body.title;
    if (body.completed !== undefined)
        task.completed = body.completed;
    return task;
});
