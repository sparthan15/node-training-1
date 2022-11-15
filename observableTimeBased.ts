import { of, take, from, Observable, map, interval } from 'rxjs';

const sourceInterval = interval(1000);//interval return an Observable

const fiveNumbers: Observable<string> = sourceInterval.pipe(
    take(5),
    map((value: number) => {
        console.log(`map received: ${value}`);
        return `string_${value}`;
    })
)

fiveNumbers.subscribe((value:string)=>{
    console.log(`${new Date().toLocaleTimeString()} ${value}`)
});