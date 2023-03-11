import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ArtPageComponent from '../components/ArtPageComponent'
import UpdateNFT from '../components/UpdateNFT'
// import Mynfts from '../components/Mynfts'


const Art = () => {
  return (
    <div className="min-h-screen">
    <div className="gradient-bg-hero">
    <Header />
</div>
  <ArtPageComponent/>
     <UpdateNFT />
     {/* <Mynfts/> */}
<Footer/>
    
     
    
   </div>
  )
}

export default Art