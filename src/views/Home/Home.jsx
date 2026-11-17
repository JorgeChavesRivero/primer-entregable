import { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { productosIniciales } from "../../data/products";
import estilos from "./Home.module.css";

const Home = () => {
    const [productos] = useState(productosIniciales);
    return (
        <main>
            <section id="inicio" className={estilos.hero}>
                <div className={estilos.contenedor}>
                    <h1 className={estilos.titulo}>Sabor que une a Colombia</h1>
                    <p className={estilos.subtitulo}>Conoce los productos de las marcas Nutresa que hacen parte de tu mesa.</p>
                </div>
            </section>
            <section id="productos" className={estilos.contenedor}>
                <h2 className={estilos.seccion}>Nuestros productos</h2>
                <ProductList productos={productos} />
            </section>
        </main>
    );
};

export default Home;