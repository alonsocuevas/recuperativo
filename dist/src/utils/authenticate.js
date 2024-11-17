"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const h3_1 = require("h3");
const data_1 = require("../data");
const authenticate = (req) => {
    const token = req.headers['x-authorization'];
    if (!token || typeof token !== 'string') {
        throw (0, h3_1.createError)({ statusCode: 401, statusMessage: 'Unauthorized' });
    }
    const user = data_1.users.find(u => u.token === token);
    if (!user) {
        throw (0, h3_1.createError)({ statusCode: 401, statusMessage: 'Unauthorized' });
    }
    return user;
};
exports.authenticate = authenticate;
