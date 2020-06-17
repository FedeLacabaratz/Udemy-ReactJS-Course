import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    const [search, setSearch] = useState({
        ingrediente: '',
        categoria: ''
    });

    // Extraigo mis categorias desde el context
    const { categories } = useContext(CategoriasContext);
    const { setSearchRecipes, setConsult } = useContext(RecetasContext);

    // Funcion para leer los contenidos
    const obtainDataReceipe = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    };

    // Funcion para ejecutar la búsqueda
    const handleSearch = e => {
        e.preventDefault();

        setSearchRecipes(search);
        setConsult(true);
    }

    return ( 
        <form 
            className="col-12"
            onSubmit={handleSearch}
        >
            <fieldset className="text-center">
                <legend>Cocktails by Category or Ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text"
                        className="form-control"
                        name="ingrediente"
                        placeholder="Find Cocktails by Ingredients..."
                        onChange={obtainDataReceipe}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtainDataReceipe}
                    >
                        <option value="">-- Select Category --</option>
                        {categories.map(category => (
                            <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Find My Cocktails"
                    />
                </div>
            </div>
        </form>
     );
};
 
export default Formulario;