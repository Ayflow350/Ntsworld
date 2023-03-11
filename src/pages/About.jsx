import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";


const About = () => {
  return (
    <>
      <Header />
      <div className=" container mx-auto px-6 py-10 font-body">
        <div className=" ">
          <div className=" px-4 py-5 md:px-12 md:w-4/5">
            <h1 className="font-bold text-5xl mb-7">Who we are</h1>
            <p>
              At Zyteon, we're excited about a brand new type of digital good
              called a non-fungible token, or NFT. NFTs have exciting new
              properties: they’re unique, provably scarce, tradeable, and usable
              across multiple applications. Just like physical goods, you can do
              whatever you want with them!
            </p>
            <p className="mt-5">
              You could throw them in the trash, gift them to a friend across
              the world, or go sell them on an open marketplace. But unlike
              physical goods, they're armed with all the programmability of
              digital goods.
            </p>
            <p className="mt-5">
              A core part of our vision is that open protocols like Ethereum and
              interoperable standards like ERC-721 and ERC-1155 will enable
              vibrant new economies. We're building tools that allow consumers
              to trade their items freely, creators to launch new digital works,
              and developers to build rich, integrated marketplaces for their
              digital items. We’re proud to be the first and largest marketplace
              for NFTs.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About