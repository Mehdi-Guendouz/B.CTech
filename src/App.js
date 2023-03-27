import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Achievement from './components/Achievement/Achievement';
import Companies from './components/Companies/Companies';

function App() {
  return (
    <div className="App">
        <div className='nav-hero-container'>
          <img src='./image/backgroundd.png' alt='background' />
          <Navbar />
          <Hero />
        </div>
        <Achievement />
        <Companies />
        {/* <About /> */}
        {/* <Work /> */}
        {/* <Comunity /> */}
        {/* <Footer /> */}
    </div>
  );
}

export default App;
