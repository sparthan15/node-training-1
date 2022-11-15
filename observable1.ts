import {of, Observable} from  "rxjs";

const emitter:Observable<number> = of(1,2,3,4);

emitter.subscribe((value: number)=>{
    console.log(`value: ${value}`)
});