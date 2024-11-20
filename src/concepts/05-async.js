import { heroes } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    findHero(id1).then((name) => element.innerHTML = name);

}
//async cambia una funcion (deja de devolver un objeto y devuelve una promesa)
const findHero = async (id) => {
    const hero = heroes.find (hero => hero.id === id)
    return hero.name; 
}