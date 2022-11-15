"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const sourceInterval = (0, rxjs_1.interval)(1000); //interval return an Observable
const fiveNumbers = sourceInterval.pipe((0, rxjs_1.take)(5), (0, rxjs_1.map)((value) => {
    console.log(`map received: ${value}`);
    return `string_${value}`;
}));
fiveNumbers.subscribe((value) => {
    console.log(`${new Date().toLocaleTimeString()} ${value}`);
});
