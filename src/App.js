import Annoncement from './components/Annoncement';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import ScrollArrow from './components/ScrollArrow';
import Loader from './components/Loader';
import { useState, useEffect } from 'react';







const App = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return loader ? (
    <Loader />
  ) : (
    <div className="App">
      <ScrollArrow />
      <Annoncement />
      <Navbar />
      <Home />
      <About />
      <Services />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
