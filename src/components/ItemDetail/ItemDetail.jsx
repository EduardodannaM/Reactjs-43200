import React from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img }) => {
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
    </div>
  );
};

export default ItemDetail;
