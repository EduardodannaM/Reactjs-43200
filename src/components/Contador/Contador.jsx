import { useState } from "react";

const Contador = ({ inicial, stock }) => {
  const [contador, setContador] = useState(inicial);
  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const disminuirContador = () => {
    if (contador > inicial) setContador(contador - 1);
  };

  const agregarlAlCarrito = () => {
    console.log(`Agregado ${contador} items`);
  };
  return (
    <div>
      <button onClick={disminuirContador}> - </button>
      <strong> {contador} </strong>
      <button onClick={aumentarContador}> + </button>
      <br />
      <button onClick={agregarlAlCarrito}> Agregar al Carrito </button>
    </div>
  );
};

export default Contador;
