import Style from "./Bar.module.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { connectWallet } from "../Blockchain.Services";
import { setGlobalState, useGlobalState, truncate } from "../store";

const SideBar = () => {

  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <div className={Style.items}>
     
        <ul className={Style.ul_wrap}>
          <li className={Style.list}>
            <Link to="/">Home</Link>
          </li>
          <li className={Style.list}>
            <Link to="/Collection">Collection</Link>
          </li>
          <li className={Style.list}>
            {" "}
            <Link to="/CreatePage">Create</Link>
          </li>
         

          <li>
            {connectedAccount ? (
              <button
                className="shadow-black text-white
        bg-[#8359ff] hover:bg-[#7862ba] md:text-xs p-3
          rounded-full cursor-pointer "
              >
                {truncate(connectedAccount, 4, 4, 11)}
              </button>
            ) : (
              <button
                className=" shadow-black text-white
        bg-[#8359ff] hover:bg-[#7862ba] md:text-xs p-3 mt-3 rounded-full
         cursor-pointer"
                onClick={connectWallet}
              >
                Connect wallet
              </button>
            )}
          </li>
        </ul>
      </div>
   
  );
}

export default SideBar


  
 
  
  
   
  
  
  
   
  
   