import React from "react";
import { useEffect, useState } from "react";
// import { setGlobalState, useGlobalState } from '../store'
import Identicon from "react-identicons";
import { FaTimes } from "react-icons/fa";
import { useGlobalState, setGlobalState, truncate, setAlert } from "../store";
import { buyNFT } from "../Blockchain.Services";
import style from "./ArtPage.module.css";
import image from "../assets/team.jpg";
import {motion} from 'framer-motion'


// Animation

const containerVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};



const btnVariant = {
  hover: {
    scale: 1.1,
  },
};


const ArtPageComponent = () => {
  const [showModal] = useGlobalState("showModal");
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [nft] = useGlobalState("nft");

  const onChangePrice = () => {
    setGlobalState("showModal", "scale-0");
    setGlobalState("updateModal", "scale-100");
   

  };

  const handleNFTPurchase = async () => {
    setGlobalState("showModal", "scale-0");
    setGlobalState("loading", {
      show: true,
      msg: "Initializing NFT transfer...",
    });

    try {
      await buyNFT(nft);
      setAlert("Transfer completed...", "green");
      window.location.reload();
    } catch (error) {
      console.log("Error transfering NFT: ", error);
      setAlert("Purchase failed...", "red");
    }
  };
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      // className={`fixed top-0 left-0 w-screen h-screen flex items-center
      //     justify-center bg-black bg-opacity-50 transform
      //     transition-transform duration-300 ${showModal}`}
    >
      {/* <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <p className="font-semibold text-gray-400">Buy NFT</p>
            <button
              type="button"
              onClick={() => setGlobalState("showModal", "scale-0")}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button>
          </div>

          <div className="flex flex-row justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={nft?.metadataURI}
                alt={nft?.title}
              />
            </div>
          </div>

          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">{nft?.title}</h4>
            <p className="text-gray-400 text-xs my-1">{nft?.description}</p>

            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-start items-center">
                <Identicon
                  string={nft?.owner}
                  size={50}
                  className="h-10 w-10 object-contain rounded-full mr-3"
                />
                <div className="flex flex-col justify-center items-start">
                  <small className="text-white font-bold">@owner</small>
                  <small className="text-pink-800 font-semibold">
                    {nft?.owner ? truncate(nft.owner, 4, 4, 11) : "..."}
                  </small>
                </div>
              </div>

              <div className="flex flex-col">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">{nft?.cost} ETH</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-2">
            {connectedAccount == nft?.owner ? (
              <button
                className="flex flex-row justify-center items-center
                w-full text-[#e32970] text-md border-[#e32970]
                py-2 px-5 rounded-full bg-transparent 
                drop-shadow-xl border hover:bg-[#bd255f]
                hover:bg-transparent hover:text-white
                hover:border hover:border-[#bd255f]
                focus:outline-none focus:ring mt-5"
                onClick={onChangePrice}
              >
                Change Price
              </button>
            ) : (
              <button
                className="flex flex-row justify-center items-center
                w-full text-white text-md bg-[#e32970]
                hover:bg-[#bd255f] py-2 px-5 rounded-full
                drop-shadow-xl border border-transparent
                hover:bg-transparent hover:text-[#e32970]
                hover:border hover:border-[#bd255f]
                focus:outline-none focus:ring mt-5"
                onClick={handleNFTPurchase}
              >
                Purchase Now
              </button>
            )}
          </div>
        </div>
      </div> */}

      <div className={style.nft_detail_main_wrap}>
        <div className={style.nft_detail_inner_wrap}>
          <img className={style.img} src={nft?.metadataURI} alt={nft?.title} />
        </div>

        <div className={style.nft_detail_inner_wrap_2}>
          <div className={style.title_wrap}>
            <h1 className={style.title}>{nft?.title}</h1>
          </div>

          <div className={style.nft_description_wrap}>
            <h5 className="font-bold text-xl mb-4">Desciption</h5>
            <p className={style.nft_desc}>{nft?.description}</p>
          </div>

          <div className={style.creator_wrap}>
            <p className="w-50 font-bold text-xl mb-3">Creator</p>

            <p className="w-20">{nft?.owner}</p>
          </div>

          <div className="bg-slate-200 w-5/5 mb-10 p-3 rounded-md font-bold text-2xl">
            <h3 className="">
              {nft?.cost} <span>ETH</span>
            </h3>
          </div>

          <div className={style.button_wrap}>
            {connectedAccount == nft?.owner ? (
              <motion.button
                variants={btnVariant}
                whileHover="hover"
                className={style.btn}
                onClick={onChangePrice}
              >
                Change price
              </motion.button>
            ) : (
              <motion.button
                variants={btnVariant}
                whileHover="hover"
                className={style.btn}
                onClick={handleNFTPurchase}
              >
                Buy now
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtPageComponent;
