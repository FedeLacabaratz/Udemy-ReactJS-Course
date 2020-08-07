import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import Alerta from '../components/Alerta';
import Dropzone from '../components/Dropzone';
import AuthContext from '../context/auth/authContext';
import AppContext from '../context/app/appContext';
import Link from 'next/link';

const Index = () => {

  // Extraer el usuario autenticado del storage
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado } = authContext;

  // Extraer el mensaje de error de archivos
  const appContext = useContext(AppContext);
  const { mensaje_archivo, url } = appContext;

  useEffect(() => {
    usuarioAutenticado()
  }, []);

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        {url ? (
          <>
            <p className="text-center text-xl mt-10">
              <span className="font-bold text-red-700 text-2xl">Tu URL de descarga es: </span><br></br>{`${process.env.frontendURL}/enlaces/${url}`}
            </p>
            <button
              type="submit"
              className="bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold mt-10"
              onClick={() => navigator.clipboard.writeText(`${process.env.frontendURL}/enlaces/${url}`)}
            >Copiar enlace</button>
          </>
        ) : (
            <>
              {mensaje_archivo && <Alerta />}
              <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
                <Dropzone />
                <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
                  <h2 className="text-4xl font-sans font-bold text-gray-800 -mt-3">Compartir archivos de forma sencilla y privada</h2>
                  <br></br>
                  <p className="text-lg leading loose">
                    <span className="text-red-500 font-bold">ReactNodeSend</span> te permite compartir archivos con cifrado de extremo a extremo y un archivo que es eliminado después de ser descargado. Así que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezcan en línea para siempre.
                  </p>
                  <br></br>
                  <br></br>
                  <Link href="/crearcuenta">
                    <a className="text-red-500 font-bold text-md hover:text-red-700">Crea una cuenta pulsando este enlace para mayores beneficios</a>
                  </Link>
                </div>
              </div>
            </>
          )}
      </div>
    </Layout >
  );
}

export default Index;
