import { useState } from "react";
import "./Contador.css";

const Contador = ({ inicial, stock, funcionSumarCarrito }) => {
  const [contador, setContador] = useState(inicial);
  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const disminuirContador = () => {
    if (contador > inicial) setContador(contador - 1);
  };
  /*
  const funcionSumarCarrito = () => {
    console.log(`Agregado ${contador} items`);
  };*/
  return (
    <div>
      <button onClick={disminuirContador}> - </button>
      <strong> {contador} </strong>
      <button onClick={aumentarContador}> + </button>
      <br />
      <button onClick={() => funcionSumarCarrito(contador)}>
        {" "}
        Agregar al Carrito{" "}
      </button>
    </div>
  );
};

export default Contador;
