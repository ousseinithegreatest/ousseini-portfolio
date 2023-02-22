import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experiences } from "./sections/Experiences";
import { Footer } from "./components/Footer";

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
