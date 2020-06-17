import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Crear el context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    // State del provider
    const [ idrecipe, setIdRecipe] = useState(null);
    const [selectedrecipe, setSelectedRecipe] = useState({});

    // Una vez que tenemos una receta hacemos un llamado a la API
    useEffect(() => {
        const obtainRecipe = async() => {
            if(!idrecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;

            const resultado = await axios.get(url);
            
            setSelectedRecipe(resultado.data.drinks[0])
        }
        obtainRecipe();
    }, [idrecipe])


    return ( 
        <ModalContext.Provider
            value={{
                selectedrecipe,
                setIdRecipe,
                setSelectedRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;
