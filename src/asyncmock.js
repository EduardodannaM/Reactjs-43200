const productos = [
  {
    nombre: "Lente RayBan",
    precio: "$ 500",
    id: "1",
    img: "../img/LenteRayBan.jpg",
    idCat: "RayBan",
  },
  {
    nombre: "Lente RayBan",
    precio: "$ 23500",
    id: "2",
    img: "../img/LenteRayBan2.jpg",
    idCat: "RayBan",
  },
  {
    nombre: "Lente Oakley",
    precio: "$ 600",
    id: "3",
    img: "../img/LenteOakley.jpg",
    idCat: "Oakley",
  },
  {
    nombre: "Lente Oakley",
    precio: "$ 23600",
    id: "4",
    img: "../img/LenteOakley2.jpg",
    idCat: "Oakley",
  },
  {
    nombre: "Lente Costa",
    precio: "$ 700",
    id: "5",
    img: "../img/LenteCosta.jpg",
    idCat: "Costa",
  },
  {
    nombre: "Lente Costa",
    precio: "$ 1700",
    id: "6",
    img: "../img/LenteCosta2.jpg",
    idCat: "Costa",
  },
  {
    nombre: "Lente de Sol",
    precio: "$ 800",
    id: "7",
    img: "../img/LentedeSol.jpg",
    idCat: "LentesdeSol",
  },
  {
    nombre: "Lente de Sol",
    precio: "$ 900",
    id: "8",
    img: "../img/LentedeSol2.jpg",
    idCat: "LentesdeSol",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 1000);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 1000);
  });
};
