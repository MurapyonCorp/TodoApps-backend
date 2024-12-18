"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const todos_module_1 = require("./modules/todos/todos.module");
const database_config_1 = require("./config/database.config");
const countup_timers_module_1 = require("./modules/countup-timers/countup-timers.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: database_config_1.DATABASE_CONFIG.DB_CONNECTION,
                host: database_config_1.DATABASE_CONFIG.DB_HOST,
                port: database_config_1.DATABASE_CONFIG.DB_PORT,
                database: database_config_1.DATABASE_CONFIG.DB_DATABASE,
                username: database_config_1.DATABASE_CONFIG.DB_USERNAME,
                password: database_config_1.DATABASE_CONFIG.DB_PASSWORD,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: false,
                logging: true,
            }),
            todos_module_1.TodosModule,
            countup_timers_module_1.CountUpTimersModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map