import ProductCard from "../ProductCard/ProductCard";
import estilos from "./ProductList.module.css";

const ProductList = ({ productos = [] }) => {
  if (productos.length === 0) {
    return <p className={estilos.vacio}>No hay productos disponibles.</p>;
  }

  return (
    <div className={estilos.grilla}>
      {productos.map((producto) => (
        <ProductCard key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ProductList;