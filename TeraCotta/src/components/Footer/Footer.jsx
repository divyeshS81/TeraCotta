import React from "react";
import Wave from "react-wavify";
import "./Footer.css";
import { FaFacebook , FaTiktok} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RxTwitterLogo } from "react-icons/rx";
import { FaSnapchat } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="relative"> 
        <Wave
          fill="#E5EDE9"
          paused={false}
          style={{ display: "flex", height:"700px",  width : "1510px ", marginTop:"100px" }}
          options={{height: 40, amplitude: 60, speed: 0.30,points: 3, }}
        />
          <div className=" footer-name text-[#556F5F] absolute flex top-20 mt-36 ml-48">
            <div className="Footer-links mt-3 ">
                <h1 className="uppercase font-bold text-xl " >subscribe now!</h1>
            </div>
            <div className="email-input">
                <input type="email" className=" email h-10 w-96 relative" placeholder="Your Email"/>
                <button className="btn absolute bg-orange-300 h-9  rounded-full w-24 ">Subscribe</button>
            </div>

            <div className="social-icons flex ml-36 space-x-3">
                <button className="facebook "><div><FaFacebook /></div></button>
                <button className="instagram"><div><FaInstagram /></div></button>
                <button className="tiktok"><div><FaTiktok /></div></button>
                <button className="snepchat"><div><FaSnapchat /></div></button>
                <button className="twitter"><div><RxTwitterLogo /></div></button>
            </div>
       </div>
        <div className="footer-links absolute mt-20px top-80 left-44 flex space-x-60 pt-4">
            <div className="'our-Compnay uppercase ">our company
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="'our-Compnay uppercase ">products
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="'our-Compnay uppercase ">about us
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="'our-Compnay uppercase ">your account
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
