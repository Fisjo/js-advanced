
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    const myGenerator = myFirstGeneratorFunction(); 

    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    console.log(myGenerator.next());
    
}

function* myFirstGeneratorFunction () {
    yield 'Mi primer valor'; 
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    
    //aqui el parametro done:true
    return 'No hay valores';
    yield 'Esto no se va a devolver'; 
}