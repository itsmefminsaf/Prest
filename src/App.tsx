import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <main>
      <Nav />
      <Home />
      <About />
      <Reviews />
      <Pricing />
      <Contact />
    </main>
  );
};

export default App;
