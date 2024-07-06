import React from 'react'
const WhatsAppButton = () => {
  const phoneNumber = '03356159746';
  const message = encodeURIComponent('Hello, I would like to know more about your services.');

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className='bg-gradient-to-br from-[#00617a] via-[#0096bb] to-[#00617a] px-16 py-3 text-white text-lg font-semibold rounded-lg'
    >
      WhatsApp
    </button>
  );
};
const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center">
      <h1 className='text-center mt-14 mb-3 text-2xl font-semibold text-[#21829b] gap-8'>Contact Us
      </h1>
      <div className="btn mt-2 text-white">
            <WhatsAppButton />
        </div>
      </div>
    </>
  )
}

export default Contact
