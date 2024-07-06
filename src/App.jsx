import React from 'react';
import Navbar from './components/Navbar';
import MainCont from './components/MainCont';
import Vertical from './components/Vertical';
import Clients from './components/Clients';
import PortfolioBtns from './components/PortfolioBtns';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <div className="bg-[#000] font-[poppins] pt-5 w-full h-auto ">
        <Navbar />
        <MainCont />
        <Vertical />
        <Clients />
        <Vertical />
        <PortfolioBtns />
        <Vertical />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
