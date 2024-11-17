"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoute = void 0;
const h3_1 = require("h3");
const node_crypto_1 = require("node:crypto");
const valibot_1 = require("valibot");
const data_1 = require("../data");
const registerSchema = valibot_1.z.object({
    username: valibot_1.z.string().nonempty(),
    name: valibot_1.z.string().nonempty(),
    password: valibot_1.z.string().nonempty()
});
exports.registerRoute = (0, h3_1.eventHandler)(async (req) => {
    const body = await useBody(req);
    registerSchema.parse(body);
    const { username, name, password } = body;
    if (data_1.users.find(user => user.username === username)) {
        throw (0, h3_1.createError)({ statusCode: 409, statusMessage: 'Conflict: User already exists' });
    }
    const salt = (0, node_crypto_1.randomBytes)(16).toString('hex');
    const hashedPassword = (0, node_crypto_1.scryptSync)(password, salt, 64).toString('hex');
    const storedPassword = `${salt}:${hashedPassword}`;
    data_1.users.push({ username, name, password: storedPassword });
    return { username, name };
});
