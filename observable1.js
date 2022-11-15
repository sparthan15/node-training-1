"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const emitter = (0, rxjs_1.of)(1, 2, 3, 4);
emitter.subscribe((value) => {
    console.log(`value: ${value}`);
});
