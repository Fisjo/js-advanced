import { heroes } from "../data/heros"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    console.log('Inicio componente');

    findHero(id1) //el console.log del then se escribirá despues porque primero ejecuta el codigo sincron
        .then(name => element.innerHTML = name)
        .catch((error) => element.innerHTML = error)

    console.log('Fin del componente'); //aqui termina la funcion y se salta a donde manda la promesa
}

//async cambia una funcion (deja de devolver un objeto y devuelve una promesa)
/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {
    const hero = heroes.find (hero => hero.id === id)
    if (!hero) {
        throw new Error(`Hero with id ${id} not found`);
    }
    
    return hero.name; 
}