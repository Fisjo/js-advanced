
import { heroes } from "../data/heros";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generetorsAsyncComponent = async (element) => {
    
    const heroGenerator = getHeroGenerator(); 
    let isFinished = false; 

    do {
        const {value, done} = await heroGenerator.next(); 
        isFinished = done; 

        if (isFinished) break; 

        element.innerHTML = value; 
    } while (!isFinished); //el valor es done nos salimos

}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep(); 
        yield hero.name; 
    }
    return 'No hay mas heroes'; 
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(); 
        }, 600); 
    })
}