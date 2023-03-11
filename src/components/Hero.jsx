import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'
import zyteonbanner from '../assets/team.jpg'
import { Link } from "react-router-dom";

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const onCreatedNFT = () => {
    
  }

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10 font-body"
    >
      <div className="md:w-3/6 w-full">
        <div className="hero-text">
          <h1 className="text-black text-5xl font-bold leading-tight">
            Buy and Sell <br /> Digital Arts, <br />
            <span className="text-black  leading-tight">NFTs</span> Collections
          </h1>
          <p className="text-black text-sm mt-3 leading-5 ">
            Zyteon is a NFT Marketplace that brings artists and creators
            together on a single platform. Buy premium and exclusive NFTs
            created by global leading artists.
          </p>
        </div>

        <div className="flex flex-row mt-5">
          <button
            className="text-white
            bg-[#8359ff] hover:bg-[#7862ba]
            rounded-full cursor-pointer px-6 py-3"
            onClick={onCreatedNFT}
          >
            <Link to="/CreatePage">Create now</Link>
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-black font-bold">1231k</p>
            <small className="text-pink">User</small>
          </div>
          <div>
            <p className="text-black font-bold">152k</p>
            <small className="text-black-300">Artwork</small>
          </div>
          <div>
            <p className="text-black font-bold">200k</p>
            <small className="text-black-300">Artist</small>
          </div>
        </div>
      </div>

      <div
        className=" md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-xl overflow-hidden bg-black-800"
      >
        <img
          src={zyteonbanner}
          alt="NFT Art"
          className="h-70 w-full object-cover"
        />
        <div className="flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : "Connect Your Wallet"}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-black font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : "Connect Your Wallet"}
            </p>
            <small className="text-purple-800 font-bold">@you</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
