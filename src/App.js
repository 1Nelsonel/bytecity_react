import './App.css';
import Hero from './Pages/Hero';
import AboutUs from './Pages/AboutUs';
import WhyChooseUs from './Pages/WhyChooseUs';
import HireUs from './Pages/HireUs';
import Footer from './Pages/Footer';
import Clients from './Pages/Clients';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services/>
      <Clients />
      <HireUs />
      <Footer />
    </div>
  );
}

export default App;
