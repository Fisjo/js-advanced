import { heroes } from "../data/heros";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id = '5d86371fd55e2e2a30fe1ccb1'; 
    findHero(id, (error, hero) => {
        if (error) {
            element.innerHTML = error; 
            return; 
        }
        // element.innerHTML = hero.name || 'Hero not found'
        element.innerHTML = hero?.name
    }); 

}

/**
 * 
 * @param {String} id 
 * @param {(error?: String, hero : Object) => void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id); 

    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return;     //obligatorio porque el callback no detiene la ejecucion
    }

    callback(null, hero); 

}