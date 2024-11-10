"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_CONFIG = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env' });
const DB_CONNECTION = ['mysql', 'mariadb', 'postgres', 'mongodb'];
const parseDBConnection = (dbConnection) => {
    if (DB_CONNECTION.some((value) => value === dbConnection)) {
        return dbConnection;
    }
    return 'postgres';
};
exports.DATABASE_CONFIG = {
    DB_CONNECTION: parseDBConnection(process.env.DB_CONNECTION),
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT),
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
};
//# sourceMappingURL=database.config.js.map