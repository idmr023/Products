/*
*Se recorre todo el array y se acumula la suma de products.price dentro del acumulador acc. Considerando a 0 como el valor inicial
*@param {Array} products cartProduct: Array of Objects
*@returns {number} Total price
*/
export const totalPrice = (products) => {
    // let acc = 0
    return products.reduce((acc, product) => acc + product.price, 0);
}

/**
 * This function obtains current DateTime
 * @returns {number} Date Time
 */

export const dateTime = () => {
    const date = new Date().toLocaleDateString();        
    return date;
}
