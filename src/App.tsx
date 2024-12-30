import React, { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Loader from './components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
