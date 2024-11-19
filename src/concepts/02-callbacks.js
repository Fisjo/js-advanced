import { heroes } from "../data/heros";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {

    const id = '5d86371fd55e2e2a30fe1ccb1'; 
    findHero(id, (cualquierNombre) => {
        element.innerHTML = cualquierNombre.name; 
    }); 

}

/**
 * 
 * @param {String} id 
 * @param {(hero : Object) => void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id); 
    callback(hero); 

}