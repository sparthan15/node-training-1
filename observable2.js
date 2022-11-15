"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const emitter = (0, rxjs_1.from)([1, 2, 3, 4]);
const modulus = emitter.pipe((0, rxjs_1.map)((value) => {
    console.log(`value: ${value}`);
    return value % 2;
}));
modulus.subscribe((value) => {
    console.log(`consumed value: ${value}`);
});
const emitter2 = (0, rxjs_1.of)(1, 2, 3, 4);
const stringMap = emitter2.pipe((0, rxjs_1.map)((value) => {
    return value * 2;
}), (0, rxjs_1.map)((value) => {
    return `str_${value}`;
}));
stringMap.subscribe((value) => {
    console.log(`${value}`);
});
