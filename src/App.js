import "./App.css";
import "./css/index.css";
import "./css/phone.css";
import "./css/tab.css";
import Navbarr from "./landing_page/Navbar";
import Hero from "./landing_page/Hero";
import About from "./landing_page/About";
import Gallery from "./landing_page/Gallery";
import Process from "./landing_page/Process";
import Blog from "./landing_page/Blog";
import Footer from "./landing_page/Footer";

function App() {
  return (
    <>
      <Navbarr />
      <Hero />
      <About />
      <Gallery />
      <Process />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
