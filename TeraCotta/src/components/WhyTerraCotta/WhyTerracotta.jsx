import React from 'react'
import "./WhyTerracotta.css";
import Dtruck from "../../assets/Dtruck.webp";
import Coin from "../../assets/coin.gif";
import Gift from "../../assets/gift.webp";
import World from "../../assets/world.webp";
import { FaArrowRight } from "react-icons/fa6";


const WhyTerracotta = () => {
  return (
   <>
    <div className='WhyTerracotta-container mt-10  '>
        <div className='Title text-center font-bold text-4xl '>Why <span className='text-[#556F5F] '>TerraCotta ?</span></div>
        <div className='desc text-center mt-5 text-lg text-[#556F5F]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, magnam?</div>
        <div className='inner-container mt-5'>
            <div className='inner-container2 flex space-x-8 justify-center pt-10 '>
                <div className='card'>
                    <img src={Dtruck} alt="" className='card-image top-0 h-16' />
                    <p className='card-title text-xl ml-3 mt-3'>Free Delivery Worldwide</p>
                    <p className='card-desc ml-3 mt-2 text-lg text-[#556F5F]'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                    <div className='ml-64 text-[#F1BA7A] ' ><FaArrowRight /></div>
                </div>
                <div className='card'>
                    <img src={Coin} alt="" className='card-image  top-0 h-16' />
                    <p className='card-title text-xl ml-3 mt-3'>Free Delivery Worldwide</p>
                    <p className='card-desc ml-3 mt-2 text-lg text-[#556F5F]'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                    <div className='ml-64 text-[#F1BA7A] ' ><FaArrowRight /></div>
                </div>
                <div className='card'>
                    <img src={Gift} alt="" className='card-image  top-0 h-16' />
                    <p className='card-title text-xl ml-3 mt-3'>Free Delivery Worldwide</p>
                    <p className='card-desc ml-3 mt-2 text-lg text-[#556F5F]'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                    <div className='ml-64 text-[#F1BA7A] ' ><FaArrowRight /></div>
                </div>
                <div className='card'>
                    <img src={World} alt="" className='card-image  top-0 h-16' />
                    <p className='card-title text-xl ml-3 mt-3'>Free Delivery Worldwide</p>
                    <p className='card-desc ml-3 mt-2 text-lg text-[#556F5F]'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                    <div className='ml-64 text-[#F1BA7A] ' ><FaArrowRight /></div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}   

export default WhyTerracotta