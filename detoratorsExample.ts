function firstDecorator(constructor:Function){
    console.log(`first decorator`);
}

function secondDecorator(constructor: Function){
    console.log(`second decorator`);
}

function propertyDecorator(
    target: any,
    propertyKey: string
){}

function methodDecorator(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor 
){}

function parameterDecorator(
    target: any,
    methodName: string,
    parameterIndex: number
){}

@firstDecorator
@secondDecorator
class WithOneDecorator{

    @propertyDecorator
    id:number = 1;

    @methodDecorator
    print(){}

    setId(@parameterDecorator id: number){}
}

