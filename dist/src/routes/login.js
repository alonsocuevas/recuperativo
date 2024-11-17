"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = void 0;
const h3_1 = require("h3");
const node_crypto_1 = require("node:crypto");
const valibot_1 = require("valibot");
const data_1 = require("../data");
const loginSchema = valibot_1.z.object({
    username: valibot_1.z.string().nonempty(),
    password: valibot_1.z.string().nonempty()
});
exports.loginRoute = (0, h3_1.eventHandler)(async (req) => {
    const body = await useBody(req);
    loginSchema.parse(body);
    const { username, password } = body;
    const user = data_1.users.find(user => user.username === username);
    if (!user) {
        throw (0, h3_1.createError)({ statusCode: 401, statusMessage: 'Unauthorized: User not found' });
    }
    const [salt, key] = user.password.split(':');
    const hashedBuffer = (0, node_crypto_1.scryptSync)(password, salt, 64).toString('hex');
    if (hashedBuffer !== key) {
        throw (0, h3_1.createError)({ statusCode: 401, statusMessage: 'Unauthorized: Incorrect password' });
    }
    const token = (0, node_crypto_1.randomBytes)(48).toString('hex');
    user.token = token;
    return { username: user.username, name: user.name, token };
});
