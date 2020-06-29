import React, { useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import Barra from "../layout/Barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/autenticacion/AuthContext';

const Proyectos = (props) => {

  // Extraer la información de autenticacion
  const authContext = useContext(AuthContext);
  const { usuario, usuarioAutenticado } = authContext;

  
  useEffect(() => {
      usuarioAutenticado();
      //eslint-disable-next-line
  }, []);
    
  if(!usuario) {
    props.history.push('/');
  }

  return (
    <div className="contenedor-app">
      <Sidebar />
      <div className="seccion-principal">
        <Barra />
        <main>
          <FormTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyectos;
