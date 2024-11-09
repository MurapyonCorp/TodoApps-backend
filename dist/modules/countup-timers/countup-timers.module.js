"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountUpTimersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const countup_timers_controller_1 = require("../../controllers/countup-timers/countup-timers.controller");
const countUpTimers_model_1 = require("../../models/countUpTimers/countUpTimers.model");
const countup_timers_service_1 = require("../../services/countup-timers/countup-timers.service");
let CountUpTimersModule = class CountUpTimersModule {
};
exports.CountUpTimersModule = CountUpTimersModule;
exports.CountUpTimersModule = CountUpTimersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([countUpTimers_model_1.CountUpTimersModel])],
        controllers: [countup_timers_controller_1.CountUpTimersController],
        providers: [countup_timers_service_1.CountUpTimersService],
    })
], CountUpTimersModule);
//# sourceMappingURL=countup-timers.module.js.map