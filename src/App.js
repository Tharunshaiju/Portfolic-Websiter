import './App.css';
import About from './compounds/About';
import Header from './compounds/Header';
import Hero from './compounds/Hero';
import Project from './compounds/Project';
import Resume from './compounds/Resume';
import Contact from './compounds/Contact'
import Footer from './compounds/Footer';




function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
