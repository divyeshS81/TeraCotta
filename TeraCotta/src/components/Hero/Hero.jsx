import React from "react";
import "./Hero.css";
import Wave from "react-wavify";
import Gif from "../../assets/gif.json_3.gif";
import HeroImage from "../../assets/heroImage.webp";

const Hero = () => {
  return (
    <>
      <div className="hero-container  ">
        <div className="waves relative">
          <Wave
            fill="#B9C8CE"
            paused={false}
            style={{ display: "flex", height: "600px", width: "1518px " }}
            options={{ height: 20, amplitude: 20, speed: 0.3, points: 5 }}
          />
        </div>
        <div className="absolute gif-container ">
          <img className="gif mt-10 ml-20 " src={Gif} alt="" />
          <div className="Hero-content -mt-10 ml-28 text-center space-y-3">
            <p className="uppercase text-white text-xl  ">the canvas story</p>
            <p className="uppercase text-[#556F5F] text-7xl font-bold ">
              terra cotta
            </p>
            <p className="hero-desc pt-4 text-xl text-[#8D8F90]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a
              obcaecati laudantium possimus ratione cumque.
            </p>
            <div className="uppercase btn ml-0 flex justify-center text-center pt-10">
              <div className="shop h-10 w-36 p-2 relative -ml-28 bg-white text-[#556F5F]">
                shop now</div>
              <div className="read shop h-10 w-36 p-2 absolute ml-[130px] bg-[#556F5F] text-white ">Read more </div>
            </div>
          </div>
        </div>
        <div className="heroImage absolute end-0 mt-20 ">
            <img className="hero-img w-96 h-96 mt-10 ml-20"   src={HeroImage} alt=""/>
            <img className="gif2 -mt-36  " src={Gif} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
