import React from "react";
import "./ItemDetail.css";
import { useState } from "react";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../Context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejarCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados:" + cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };
  return (
    <div className="cardItemDetail">
      <img className="imgDetail" src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {precio} </p>
      <p>Id: {id} </p>
      <p>
        Es un lente creado con toda la onda para el Verano, aprovecha y compra
        ahora
      </p>
      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar Compra </Link>
      ) : (
        <Contador
          inicial={1}
          stock={stock}
          funcionSumarCarrito={manejarCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
