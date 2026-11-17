import estilos from "./ProductCard.module.css";
import { formatearPrecio } from "../../utils/formatearPrecio";

const ProductCard = ({ nombre, marca, categoria, precio, descripcion }) => {
  return (
    <article className={estilos.tarjeta}>
      <div className={estilos.imagen} aria-hidden="true">
        {marca.charAt(0)}
      </div>
      <div className={estilos.cuerpo}>
        <span className={estilos.categoria}>{categoria}</span>
        <h3 className={estilos.nombre}>{nombre}</h3>
        <p className={estilos.descripcion}>{descripcion}</p>
        <p className={estilos.precio}>{formatearPrecio(precio)}</p>
      </div>
    </article>
  );
};

export default ProductCard;