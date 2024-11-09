"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountUpTimersController = void 0;
const common_1 = require("@nestjs/common");
const create_countUpTimer_input_1 = require("../../dto/create-countUpTimer.input");
const update_countUpTimer_input_1 = require("../../dto/update-countUpTimer.input");
const countup_timers_service_1 = require("../../services/countup-timers/countup-timers.service");
let CountUpTimersController = class CountUpTimersController {
    constructor(countUpTimersService) {
        this.countUpTimersService = countUpTimersService;
    }
    readAllCountUpTimers() {
        return this.countUpTimersService.readAllCountUpTimers();
    }
    async createCountUpTimer(input) {
        return this.countUpTimersService.createCountUpTimer(input);
    }
    async updateCountUpTimer(input) {
        return this.countUpTimersService.updateCountUpTimer(input);
    }
    async deleteCountUpTimer(id) {
        return this.countUpTimersService.deleteCountUpTimer(id);
    }
};
exports.CountUpTimersController = CountUpTimersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountUpTimersController.prototype, "readAllCountUpTimers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_countUpTimer_input_1.CreateCountUpTimerInput]),
    __metadata("design:returntype", Promise)
], CountUpTimersController.prototype, "createCountUpTimer", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_countUpTimer_input_1.UpdateCountUpTimerInput]),
    __metadata("design:returntype", Promise)
], CountUpTimersController.prototype, "updateCountUpTimer", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountUpTimersController.prototype, "deleteCountUpTimer", null);
exports.CountUpTimersController = CountUpTimersController = __decorate([
    (0, common_1.Controller)('countup-timers'),
    __metadata("design:paramtypes", [countup_timers_service_1.CountUpTimersService])
], CountUpTimersController);
//# sourceMappingURL=countup-timers.controller.js.map