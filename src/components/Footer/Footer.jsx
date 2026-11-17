import estilos from "./Footer.module.css";

const Footer = ({ empresa = "Nutresa", anio = new Date().getFullYear(), enlaces = [] }) => {
  return (
    <footer className={estilos.footer}>
      <div className={estilos.contenedor}>
        <p className={estilos.copy}> © {anio} {empresa}. Todos los derechos reservados.</p>
        <ul className={estilos.lista}>
          {enlaces.map((enlace) => (
            <li key={enlace.id}>
              <a href={enlace.href} className={estilos.enlace}>{enlace.texto}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;