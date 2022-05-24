import Annoncement from './components/Annoncement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import ScrollArrow from './components/ScrollArrow';

const App = () => {
  return (
    <div className="App">
      <ScrollArrow />
      <Annoncement />
      <Navbar />
      <Home />
      <About/>
      <Services />
      <ProductList />
      <Contact />
      <Footer />
   
      
    </div>
  );
};

export default App;
