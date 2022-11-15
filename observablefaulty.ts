import { of, take, from, Observable, map, interval, catchError } from 'rxjs';

interface IValue {
    value: number
}
interface INestedObj {
    id?: IValue
}

const objEmit: Observable<INestedObj> = of(
    { id: { value: 1 } },
    {},
    { id: { value: 2 } }
);

const returnIdValue = objEmit.pipe(
    map((value: INestedObj) => {
        return value?.id!.value;
    })
)
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
const returnIdValue2 = objEmit.pipe(
    map((value: INestedObj) => {
        return value!.id!.value;
    }),
    catchError((error: unknown) => {
        console.log(`stream caought : ${error}`)
        return of(null);
    })
);

returnIdValue2.subscribe({
    next: (v) => console.log(`received : ${v}`),
    error: (e) => console.log(`error my friend!: ${e}`),
    complete?: () => console.log(`complete !!`);
});