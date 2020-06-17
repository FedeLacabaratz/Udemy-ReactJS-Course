import React from 'react';

const Formulario = () => {
    return ( 
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Cocktails by Category or Ingredient</legend>
            </fieldset>
            <div className="row mt-3">
                <div className="col-md-3">
                    <input 
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Find Cocktails by Ingredients..."
                    />
                </div>
                <div className="col-md-3">
                <select
                        className="form-control"
                        name="alcohol"
                    >
                        <option value="">-- Select if Alcoholic or not --</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">-- Select Category --</option>
                    </select>
                </div>
                <div className="col-md-3">
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