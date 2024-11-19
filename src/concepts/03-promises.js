import { heroes } from "../data/heros"




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const rederHeroe = (hero) => {
        element.innerHTML = hero.name; 
    }
    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h4>${hero1.name}</h4>
            <h4>${hero2.name}</h4>
        `;
    }
    const renderError = (error) => {
        element.innerHTML = error; 
    }

    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371f1efebc31def272e2'; 


    findHero(id1)
        .then((hero1) => {
            
            findHero(id2)
                .then((hero2) => {
                    renderTwoHeroes(hero1, hero2)
                })
                .catch(renderError); 
        })
        .catch(renderError); 

}

/**
 * 
 * @param {String} id 
 * @returns {Promise} 
 */
const findHero = (id) => {

    return new Promise(( resolve, reject) => {

        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return; 
        }
        reject(`Hero with id ${id} not found`); 

    });  

    // return promise; 

}