import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Loading from "./components/LoadingOverlay";

function App() {
  return (
    <div>
      <Loading />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
