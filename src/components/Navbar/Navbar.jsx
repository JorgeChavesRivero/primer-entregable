import estilos from "./Navbar.module.css";

const Navbar = ({ marca = "Nutresa", enlaces = [] }) => {
  return (
    <header className={estilos.navbar}>
      <div className={estilos.contenedor}>
        <a href="#inicio" className={estilos.marca}>{marca}</a>
        <nav aria-label="Navegación principal">
          <ul className={estilos.lista}>
            {enlaces.map((enlace) => (
              <li key={enlace.id}>
                <a href={enlace.href} className={estilos.enlace}>{enlace.texto}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;