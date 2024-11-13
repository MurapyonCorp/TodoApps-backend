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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosEntity = exports.TodoStatus = void 0;
const typeorm_1 = require("typeorm");
var TodoStatus;
(function (TodoStatus) {
    TodoStatus["incomplete"] = "incomplete";
    TodoStatus["done"] = "done";
})(TodoStatus || (exports.TodoStatus = TodoStatus = {}));
let TodosEntity = class TodosEntity extends typeorm_1.BaseEntity {
};
exports.TodosEntity = TodosEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TodosEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TodosEntity.prototype, "target_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], TodosEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: TodoStatus }),
    __metadata("design:type", String)
], TodosEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], TodosEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], TodosEntity.prototype, "updated_at", void 0);
exports.TodosEntity = TodosEntity = __decorate([
    (0, typeorm_1.Entity)('todos')
], TodosEntity);
//# sourceMappingURL=todos.entity.js.map