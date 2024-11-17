"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorldRoute = void 0;
const h3_1 = require("h3");
exports.helloWorldRoute = (0, h3_1.eventHandler)(() => 'Hello World!');
