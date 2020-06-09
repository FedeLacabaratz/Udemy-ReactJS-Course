import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario'

function App() {

  // Array de citas
  const [citas, setCitas] = useState([]);

  // Function que tome las citas actuales y agregue la nueva
  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  return (
    <Fragment>
      <h1>CitasMed App</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
