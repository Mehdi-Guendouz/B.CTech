import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Achievement from './components/Achievement/Achievement';
import Companies from './components/Companies/Companies';
import About from './components/About/About';
import Work from './components/Work/Work';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <div className='nav-hero-container'>
          <img src='./image/backgroundd.png' alt='background' />
          <Navbar />
          <Hero />
        </div>
        <div className='nav-hero-container'>
          <img src='./image/backgroundd.png' alt='background' />
          <Navbar />
          <Hero />
        </div>
        
        <Achievement />
        <Companies />
        <About />
        <Work />
        <Community />
        <Footer />
    </div>
  );
}

export default App;
