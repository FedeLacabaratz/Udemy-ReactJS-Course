import React, { useContext } from 'react';
import Receta from './Receta';
import { RecetasContext } from '../context/RecetasContext';

const ListaRecetas = () => {

    // Extraer las recetas
    const { recipes } = useContext(RecetasContext);

    return ( 
        <div className="row mt-5">
            {recipes.map(recipe => (
                <Receta 
                    key={recipe.idDrink}
                    recipe={recipe}
                /> 
            ))}
        </div>
     );
}
 
export default ListaRecetas;