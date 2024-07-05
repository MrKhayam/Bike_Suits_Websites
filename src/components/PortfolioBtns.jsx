import React, { useEffect, useState } from 'react'
import Suits from './Suits';
import Boots from './Boots';
import Jackets from './Jackets';
import Glooves from './Glooves';

const PortfolioBtns = () => {
    const [suits,setSuits] = useState(true);
    const [jackets,setJackets] = useState(false);
    const [boots,setBoots] = useState(false);
    const [glooves,setGlooves] = useState(false);




    const handleSuits = () => {
        setSuits(true);
        setBoots(false);
        setGlooves(false);
        setJackets(false);
    }
    const handleJackets = () => {
        setSuits(false);
        setBoots(false);
        setGlooves(false);
        setJackets(true);
    }
    const handleBoots = () => {
        setSuits(false);
        setBoots(true);
        setGlooves(false);
        setJackets(false);
    }
    const handleGlooves = () => {
        setSuits(false);
        setBoots(false);
        setGlooves(true);
        setJackets(false);
    }

  return (
    <>
    <div className='w-[95%] m-auto flex flex-col gap-10 items-center'>

      <div className={`mt-14 flex w-[100%] m-auto gap-3 items-center justify-center py-4 rounded-xl bg-gradient-to-r from-[#00627a77] via-[#0096bb75] to-[#00627a70]`}>
        <h1 onClick={handleSuits} className={`transition-all duration-300 px-1 py-1 rounded-md font-semibold ${suits ? 'text-red bg-white' : 'text-white'}`}>Suits</h1>
        <h1 onClick={handleJackets} className={`transition-all duration-300 px-1 py-1 rounded-md font-semibold ${jackets ? 'text-black bg-white' : 'text-white'}`}>Jackets</h1>
        <h1 onClick={handleBoots} className={`transition-all duration-300 px-1 py-1 rounded-md font-semibold ${boots ? 'text-black bg-white' : 'text-white'}`}>Boots</h1>
        <h1 onClick={handleGlooves} className={`transition-all duration-300 px-1 py-1 rounded-md font-semibold ${glooves ? 'text-black bg-white' : 'text-white'}`}>Glooves</h1>
      </div>
        {
            suits && <Suits />
        }
        {
            boots && <Boots />
        }
        {
            jackets && <Jackets />
        }
        {
            glooves && <Glooves />
        }
    </div>
    </>
  )
}

export default PortfolioBtns
