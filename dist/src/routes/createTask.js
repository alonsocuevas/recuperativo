"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskRoute = void 0;
const h3_1 = require("h3");
const nanoid_1 = require("nanoid");
const valibot_1 = require("valibot");
const authenticate_1 = require("../utils/authenticate");
const data_1 = require("../data");
const createTaskSchema = valibot_1.z.object({ title: valibot_1.z.string().nonempty() });
exports.createTaskRoute = (0, h3_1.eventHandler)(async (req) => {
    const user = (0, authenticate_1.authenticate)(req);
    const body = await useBody(req);
    createTaskSchema.parse(body);
    const newTask = { id: (0, nanoid_1.nanoid)(), title: body.title, completed: false };
    data_1.tasks.push(newTask);
    return newTask;
});
