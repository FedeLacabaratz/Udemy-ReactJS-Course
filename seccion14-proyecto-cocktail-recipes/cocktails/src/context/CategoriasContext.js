import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
export const CategoriasContext = createContext();

// Crear el Provided que es donde se encuentran las funciones y states
const CategoriasProvider = (props) => {

    // Crear el state del context
    const [categories, setCategories] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    // Llamado a la api
    useEffect(() =>{
        const obtainCategories = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias = await axios.get(url);

            const url2 = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;
            const ingredients = await axios.get(url2);

            setCategories(categorias.data.drinks);
            setIngredients(ingredients.data.drinks);
        }
        obtainCategories();
    }, [])

    return (
        <CategoriasContext.Provider
            value={{
               categories,
               ingredients
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    );
};
export default CategoriasProvider;