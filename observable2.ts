import { of, from, Observable, map } from 'rxjs';

const emitter: Observable<number> = from([1, 2, 3, 4]);

const modulus: Observable<number> = emitter.pipe(
    map((value: number) => {
        console.log(`value: ${value}`)
        return value % 2;
    }));

modulus.subscribe((value:number)=>{
    console.log(`consumed value: ${value}`);
});

const emitter2: Observable<number> = of(1,2,3,4);
const stringMap: Observable<string> = emitter2.pipe(
    map((value:number)=>{
        return value*2;
    }),
    map((value:number)=>{
        return `str_${value}`;
    })
)

stringMap.subscribe(
    (value:string)=>{
        console.log(`${value}`);
    }
)