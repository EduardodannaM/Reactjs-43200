import React from "react";
import "./Item.css";
import Contador from "../Contador/Contador";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProducto">
      <img className="imgProducto" src={img} alt={nombre} />
      <h3>Nombre: {nombre}</h3>
      <p>Precio: {precio} </p>
      <p>Id: {id} </p>
      <Link to={`/item/${id}`}> Ver Detalles </Link>

      <Contador inicial={1} stock={5} />
    </div>
  );
};

export default Item;

//   <button className="btnProducto"> Ver Detalles </button>
