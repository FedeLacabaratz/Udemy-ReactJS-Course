import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recipes, setRecipe] = useState([]);
    const [searchrecipes, setSearchRecipes] = useState({
        ingrediente: '',
        categoria: ''
    });
    const [consult, setConsult] = useState(false);

    const { ingrediente, categoria } = searchrecipes;

    useEffect(() => {
        if(consult) {
            const obtainCocktailRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
    
                const resultado = await axios.get(url);

                setRecipe(resultado.data.drinks)
            }
            obtainCocktailRecipes();
        }
    }, [searchrecipes])

    return ( 
        <RecetasContext.Provider
            value={{
                recipes,
                setSearchRecipes,
                setConsult
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
};
 
export default RecetasProvider;