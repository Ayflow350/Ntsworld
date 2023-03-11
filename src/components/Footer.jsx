import React from "react";
import{Link} from 'react-router-dom'
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";


//INTERNAL IMPORT
import Style from "./Footer.module.css";

// import { Discover, HelpCenter } from "../NavBar/He";

const Footer = () => {
  return (
    <div className={Style.footer_main_wrap}>
      <div className={Style.footer}>
        <div className={Style.footer_box}>
          <div className={Style.footer_text_wrap}>
            <p className={Style.footer_text}>
              Zyteon is a NFT Marketplace that brings artists and creators
              together on a single platform. Buy premium and exclusive NFTs
              created by global leading artists.
            </p>
          </div>

          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={Style.footer_box}>
          <ul>
            <h3 className={Style.menu_heading}>Company</h3>
            <li className={Style.list_items}>
              <Link to="/about" className={Style.link}>
                About
              </Link>
            </li>

            <li className={Style.list_items}>
              <Link to="/policy" className={Style.link}>
                Policy
              </Link>
            </li>
            <li className={Style.list_items}>
              <Link to='/terms'>Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className={Style.footer_box}>
          <ul>
            <h3 className={Style.menu_heading}>Account</h3>
            <li className={Style.list_items}>
              <Link to="/createPage" className={Style.link}>
                Create
              </Link>
            </li>

            <li className={Style.list_items}>
              <Link to="/profile" className={Style.link}>
                Profile
              </Link>
            </li>
            <li className={Style.list_items}>
              <Link className={Style.link} to="/activities">
                Activities
              </Link>
            </li>
          </ul>
        </div>

        <div className={Style.footer_box}>
          <ul>
            <h2 className={Style.menu_heading}>Support</h2>

            <li className={Style.list_items}>
             <Link to='/contact'>
             Contact
             </Link>
            </li>

            <li className={Style.list_items}>
              <Link to="/faq" className={Style.link}>
                FAQ
              </Link>
            </li>
            <li className={Style.list_items}></li>
          </ul>
        </div>
      </div>

      <hr className={Style.footer_line} />

      <div className={Style.footer_copyright_wrap}>
        <p>
          © 2023 <span>All rights Reserved to Zyteon </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
