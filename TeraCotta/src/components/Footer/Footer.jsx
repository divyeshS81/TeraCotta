import React from "react";
import Wave from "react-wavify";
import "./Footer.css";
import { FaFacebook , FaTiktok} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RxTwitterLogo } from "react-icons/rx";
import { FaSnapchat } from "react-icons/fa";
import Applepay from "../../assets/applepay.png";
import Googlepay from "../../assets/googlepay.webp";
import Mastercard from "../../assets/MasterCard.png";
import Visa from "../../assets/visa.png"
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
            <div className="'our-Compnay text-[#556F5F] "> <h1 className="uppercase font-bold text-lg" >our company</h1>
                <ul className="mt-8 space-y-2 text-lg">
                    <li>Personal Info</li>
                    <li>Orders</li>
                    <li>Credit Slips</li>
                    <li>Content</li>
                    <li>Addresses</li>
                </ul>
            </div>
            <div className="'our-Compnay text-[#556F5F] "> <h1 className="uppercase font-bold text-lg">products</h1> 
                <ul className="mt-8 space-y-2 text-lg" >
                    <li>Product-1</li>
                    <li>Product-2</li>
                    <li>Product-3</li>
                    <li>Product-4</li>
                    <li>Product-5</li>
                </ul>
            </div>
            <div className="'our-Compnay  text-[#556F5F]  "><h1 className="uppercase font-bold text-lg">about us</h1> 
                <ul className="mt-8 space-y-2 text-lg">
                    <li>About Us</li>
                    <li>Contect Us</li>
                    <li>FAQs</li>
                    <li>New Products</li>
                    <li>Best Sales</li>
                </ul>
            </div>
            <div className="'our-Compnay  text-[#556F5F] "><h1 className="uppercase font-bold text-lg">your Account</h1> 
                <ul className="mt-8 space-y-2 text-lg">
                    <li>Login</li>
                    <li></li>
                    <li>Forgot Password</li>
                    <li>My Account</li>
                    <li>Registration</li>
                </ul>
            </div>
        </div>
        <div className="copyright absolute flex ml-44 ">
            <div className="copyright-section text-lg text-[#556f5f] ">&copy; 2024, TerraCotta Sectioned Shopify Theme</div>
            <div className="flex ms-96 space-x-0.5">
            <img className='h-14 w-14 ' src={Applepay} alt="" />
            <img className='h-14 w-14 ' src={Googlepay} alt="" />
            <img className='h-8 w-14 mt-3' src={Visa} alt="" />
            <img className='h-8 w-14 mt-3' src={Mastercard} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
