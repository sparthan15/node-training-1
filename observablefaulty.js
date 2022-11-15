"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const objEmit = (0, rxjs_1.of)({ id: { value: 1 } }, {}, { id: { value: 2 } });
const returnIdValue = objEmit.pipe((0, rxjs_1.map)((value) => {
    return value === null || value === void 0 ? void 0 : value.id.value;
}));
/*
returnIdValue.subscribe(
    (value: number) => {
        console.log(`received ${value}`);
    },
    (err: unknown) => {
        console.log(`error: ${err}`);
    },
    () => {
        console.log(`complete !`);
    }
);

**********************************************************
returnIdValue.subscribe({
    next: (v) => console.log(`rececived ${v}`),
    error: (e) => console.log(`error: Yea ${e}`),
    complete: () => console.log(`completed !`),
});
*/
const returnIdValue2 = objEmit.pipe((0, rxjs_1.map)((value) => {
    return value.id.value;
}), (0, rxjs_1.catchError)((error) => {
    console.log(`stream caought : ${error}`);
    return (0, rxjs_1.of)(null);
}));
returnIdValue2.subscribe({
    next: (v) => console.log(`received : ${v}`),
    error: (e) => console.log(`error my friend!: ${e}`),
    complete: () => console.log(`complete !!`)
});
