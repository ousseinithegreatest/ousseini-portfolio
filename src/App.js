import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
