import React from "react";
import style from "./Service.module.css";
import { FaWallet, FaImage, FaEthereum } from "react-icons/fa";
import {motion} from 'framer-motion'


// Animation

const containerVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 2,
    transition: {
      duration: 1.6,
      delay: 0.4,
    },
  },
};



const Service = () => {
  return (
    <div className="font-body">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className={style.service_main_wrap}
      >
        <div className={style.heading_wrap}>
          <h2 className="font-bold text-3xl  md:text-5xl md:px-10  ">
            CREATE AND SELL
          </h2>
        </div>

        <div className={style.main_wrap}>
          <div className={style.inner_wrap}>
            <div className={style.img_wrap}>
              <FaWallet />
            </div>
            <div>
              <h2 className={style.title}> Connect wallet</h2>
            </div>

            <div className={style.text}>
              <p>
                Get started by connecting your Wallet. To do this, click on the
                connect wallet button on, this will allow to connect to metamask
                wallet.
              </p>
            </div>
          </div>
          <div className={style.inner_wrap}>
            <FaImage className={style.img_wrap} />

            <h2 className={style.title}> Mint your item</h2>
            <div className={style.text}>
              <p>
                Upload Your Work (Image, Or 3D Art), Add A Title And
                Description, And Customize Your NFT Properties, Stats.
              </p>
            </div>
          </div>

          <div className={style.inner_wrap}>
            <div className={style.img_wrap}>
              <FaEthereum />
            </div>
            <h2 className={style.title}>List your item</h2>

            <div className={style.text}>
              <p>
                Choose Between Auctions, Fixed-Price Listings, And
                Declining-Price Listings. You Choose How You Want Tosell Your
                NFTs!
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
