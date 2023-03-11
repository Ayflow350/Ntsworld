import {
  useGlobalState,
  setGlobalState,
  setLoadingMsg,
  setAlert,
} from '../store'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'




const CreateNFT = () => {
  const [modal] = useGlobalState('modal')


 

 
  const closeModal = () => {
    setGlobalState('modal', 'scale-0')
    
  }

 

  return (

    
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
        justify-center absolute inset-y-0 left-0 w-16  duration-300 ${modal}`}
    >
      <div className=" menu-modal">
        <form className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
              
            </button>

          
          </div>

          

          <div className="flex flex-row justify-between items-center  mt-5">
           <h1>food</h1>
          </div>

          <div className="flex flex-row justify-between items-center  mt-5">
           <h1> rice</h1>
          </div>

          <div className="flex flex-row justify-between items-center  mt-5">
          <h1> rice</h1>
          </div>

          <div className="flex flex-row justify-between items-center  mt-5">
          <h1> rice</h1>
          </div>

        
        </form>
      </div>
    </div>

   
  )
}

export default CreateNFT
