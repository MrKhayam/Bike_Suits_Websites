import React from 'react';
import Navbar from './components/Navbar';
import MainCont from './components/MainCont';

const App = () => {
  return (
    <>
      <div className="bg-[#000] pt-5 w-full h-screen ">
        <Navbar />
        <MainCont />
      </div>
    </>
  );
}

export default App;
