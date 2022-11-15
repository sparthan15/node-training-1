"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function firstDecorator(constructor) {
    console.log(`first decorator`);
}
function secondDecorator(constructor) {
    console.log(`second decorator`);
}
function propertyDecorator(target, propertyKey) { }
function methodDecorator(target, methodName, descriptor) { }
function parameterDecorator(target, methodName, parameterIndex) { }
let WithOneDecorator = class WithOneDecorator {
    constructor() {
        this.id = 1;
    }
    print() { }
    setId(id) { }
};
__decorate([
    propertyDecorator
], WithOneDecorator.prototype, "id", void 0);
__decorate([
    methodDecorator
], WithOneDecorator.prototype, "print", null);
__decorate([
    __param(0, parameterDecorator)
], WithOneDecorator.prototype, "setId", null);
WithOneDecorator = __decorate([
    firstDecorator,
    secondDecorator
], WithOneDecorator);
