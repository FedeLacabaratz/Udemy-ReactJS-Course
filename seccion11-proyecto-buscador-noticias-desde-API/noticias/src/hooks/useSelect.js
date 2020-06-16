import React, { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    // State inicial del custom hook
    const [state, setState] = useState(stateInicial);

    const SetCategoria = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}

        </select>
    );
    return [state, SetCategoria];
}
 
export default useSelect;