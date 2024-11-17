"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTasksRoute = void 0;
const h3_1 = require("h3");
const authenticate_1 = require("../utils/authenticate");
const data_1 = require("../data");
exports.listTasksRoute = (0, h3_1.eventHandler)((req) => {
    (0, authenticate_1.authenticate)(req);
    return data_1.tasks;
});
