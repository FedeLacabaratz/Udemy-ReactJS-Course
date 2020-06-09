import React, { Fragment, useState } from 'react';
import Header from './components/Header.jsx'
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // State para crear listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 }
  ]);

  // State para un carrito de compras
  const [carrito, setCarrito] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo='Tienda Virtual' />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          setCarrito={setCarrito}
          productos={productos} />
      ))}

      <Carrito carrito={carrito} setCarrito={setCarrito}/>

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
