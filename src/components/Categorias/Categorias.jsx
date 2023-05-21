import { useState, useEffect } from "react";

const Categorias = () => {
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    document.title = `Categoria ${categoria}`;
  }, [categoria]);

  const handleClick = (categoria) => {
    setCategoria(categoria);
  };
  return (
    <div>
      <h2>Categorias de Productos</h2>
      <button onClick={() => handleClick("RayBan")}>RayBan</button>
      <button onClick={() => handleClick("Oakley")}>Oakley</button>
      <button onClick={() => handleClick("Costa")}>Costa</button>
      <button onClick={() => handleClick("Lentes de Sol")}>
        Lentes de Sol
      </button>
    </div>
  );
};

export default Categorias;
