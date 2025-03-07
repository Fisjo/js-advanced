
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorFunctionsComponent = (element) => {

    // const myGenerator = myFirstGeneratorFunction(); 
    // console.log(myGenerator.next());

    const genId = idGenerator(); 

    const button = document.createElement('button'); 
    button.innerText = 'Click me'; 
    element.append(button); 

    const renderButton = () => {
        const {value} = genId.next(); 
        button.innerText = `Click ${value}`; 
    }

    button.addEventListener('click', (event) => renderButton());
    console.log(genId.next());
    
    
}

function* idGenerator() {
    let currentId = 0; 
    while (true) {
        yield ++ currentId; 
    }
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