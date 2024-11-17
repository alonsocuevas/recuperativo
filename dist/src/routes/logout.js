"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutRoute = void 0;
const h3_1 = require("h3");
const authenticate_1 = require("../utils/authenticate");
exports.logoutRoute = (0, h3_1.eventHandler)((req) => {
    const user = (0, authenticate_1.authenticate)(req);
    user.token = undefined;
    return { statusCode: 204, statusMessage: 'No Content' };
});
