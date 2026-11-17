Historia de Usuario HU-GEN-01: Interfaz React modular con componentes reutilizables y estados locales

Código de Rama: feature/HU-GEN-01-arbol-componentes

Descripción del entregable: Como usuario de Nutresa, quiero ver las vistas principales del proyecto construidas con componentes React reutilizables (<Navbar />, <ProductCard />, <Footer /> y los que se requieran). Los datos estáticos se manejan con estados locales y la interfaz respeta el kit de marca Sazón.

Criterios de aceptación:
El proyecto se inicializa con Vite y se organiza en carpetas components/, assets/ y views/ según las buenas prácticas de la semana.
Las vistas principales se maquetan solo con componentes funcionales y JSX; ninguna vista concentra todo el marcado en un único archivo.
Cada bloque de la interfaz es un componente independiente (<Navbar />, <ProductCard />, <Footer /> y otros necesarios) que recibe sus datos por props.
Los datos estáticos se almacenan en estados locales con useState y se renderizan de forma declarativa con map, sin manipular el DOM directamente.
Cada componente usa CSS Modules o clases prefijadas, y reutiliza las variables y estilos base de sazon.css para mantener el kit de marca Sazón.
El repositorio tiene al menos tres ramas (main, dev, feature/XXXX) y un historial de mínimo 3 commits limpios y descriptivos.

src/
├── styles/sazon.css
├── assets/
├── components/
│   ├── Navbar/
│   ├── ProductCard/
│   └── Footer/
├── views/
├── App.jsx
└── main.jsx