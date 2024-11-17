"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTaskRoute = void 0;
const h3_1 = require("h3");
const authenticate_1 = require("../utils/authenticate");
const data_1 = require("../data");
exports.deleteTaskRoute = (0, h3_1.eventHandler)((req) => {
    const user = (0, authenticate_1.authenticate)(req);
    const { id } = req.params;
    const taskIndex = data_1.tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        throw (0, h3_1.createError)({ statusCode: 404, statusMessage: 'Not Found: Task does not exist' });
    }
    data_1.tasks.splice(taskIndex, 1);
    return { statusCode: 204, statusMessage: 'No Content' };
});
