function decoratorwithParameter(foo: string){
    return (constructor: Function)=>{
        console.log(`guenas yea ${foo}`)
    }
}

@decoratorwithParameter('vaya !')
class Guenas{

}