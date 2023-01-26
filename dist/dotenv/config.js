"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_CONNECTION = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;
