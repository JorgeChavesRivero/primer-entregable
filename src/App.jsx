import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import { enlacesNavbar, enlacesFooter } from "./data/navegacion";

const App = () => {
  return (
    <>
      <Navbar enlaces={enlacesNavbar} />
      <Home />
      <Footer enlaces={enlacesFooter} />
    </>
  );
};

export default App;