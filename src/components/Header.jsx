import zyteonlogo from "../assets/logo.png";
import React, { useState } from "react";
import { connectWallet } from "../Blockchain.Services";
import { setGlobalState, useGlobalState, truncate } from "../store";
import Identicon from "react-identicons";

import { Link } from "react-router-dom";
import Profile from "./Profile";
import SideBar from "./Bar";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  const [openProfile, setOpenProfile] = useState("");

  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-2 mx-auto mb-8 font-body">
      <div className="md:flex-[0.5]  flex-initial justify-between items-center h-13">
        <img
          className="w-40 cursor-pointer"
          src={zyteonlogo}
          alt="Zyteon Logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-black md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial menu-items-mobile"
      >
        {/* <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">Collection</li>
        <li className="mx-4 cursor-pointer">About</li>
        <li className="mx-4 cursor-pointer">Items</li> */}
        <Link to="/" className="mx-4 cursor-pointer hover:text-purple-500">
          Home
        </Link>
        <Link
          to="/activities"
          className="mx-4 cursor-pointer hover:text-purple-500 "
        >
          Activities
        </Link>
        <Link
          to="/CreatePage"
          className="mx-4 cursor-pointer hover:text-purple-500  "
        >
          Create
        </Link>
        <Link
          to="/Profile"
          className="mx-4 cursor-pointer hover:text-purple-500 "
        >
          Profile
        </Link>
      </ul>

      {connectedAccount ? (
        <button
          className=" shadow-black text-white
        bg-[#8359ff] hover:bg-[#7862ba] md:text-xs p-4
          rounded-full cursor-pointer mobile-adress-btn"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className=" shadow-black text-white
        bg-[#8359ff] hover:bg-[#7862ba] md:text-xs p-3
          rounded-full cursor-pointer mobile-adress-btn"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
      <div className="flex justify-start items-center p-3">
        <button
          className="bg-transparent  hover:bg-transparent"
          onClick={() => setOpenProfile((prev) => !prev)}
        >
          {" "}
          <Identicon
            string={connectedAccount ? connectedAccount : "Connect Your Wallet"}
            size={50}
            className=" md:h-10 w-10 object-contain rounded-full mr-3"
          />
        </button>

        {openProfile && <SideBar />}
      </div>
    </nav>
  );
};

export default Header;
