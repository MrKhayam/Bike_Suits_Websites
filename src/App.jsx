import React from 'react';
import Navbar from './components/Navbar';
import MainCont from './components/MainCont';
import Vertical from './components/Vertical';
import Clients from './components/Clients';
import PortfolioBtns from './components/PortfolioBtns';

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
      </div>
    </>
  );
}

export default App;
