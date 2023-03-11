import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto font-body">
        <div className="px-3 py-10 flex justify-center items-center md:h-screen">
          <div className='bg-slate-100 p-10 rounded-md w-4/5 border-2'>
            <h1 className=" text-2xl mb-3  md:text-4xl font-bold text-center md:mb-10">
              Get in touch
            </h1>
            <div className=" md:px-2 rounded-md w-6/7 h-50 md:h-80 ">
              <p className='text-center'>To contact us on any issue you might have with trading your NFT, please send your message to: <b>Support@zyteon.com</b> </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact