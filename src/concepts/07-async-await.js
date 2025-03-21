
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent2 = async(element) => {

    console.time('start');

    // const value1 = await slowPromise(); 
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    //esto permite realizar todas las promesas de manera concurrente
    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
        value1: ${value1} <br> 
        value2: ${value2} <br> 
        value3: ${value3} <br> 
        `

    console.timeEnd('start');

}

const slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
})

const mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
})

const fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 1000);
})  