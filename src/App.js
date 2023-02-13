import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Experiences } from "./sections/Experiences";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
