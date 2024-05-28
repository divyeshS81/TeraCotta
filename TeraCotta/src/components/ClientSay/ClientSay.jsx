import React from 'react'
import "./ClientSay.css"
import ClinetImage1 from "../../assets/ClientImage1.webp";
import ClinetImage2 from "../../assets/ClientImage2.webp";
import ClinetImage3 from "../../assets/ClientImage3.webp";

const ClientSay = () => {
  return (
    <>
        <div className='ClientSay-main-conatiner mt-16'>
            <div className='ClientSay-tile flex justify-center text-3xl font-bold'> Client&nbsp;<span className='text-[#556F5F]'>Say's</span></div>
            <div className='ClientSay-desc ml-96 mr-96 text-center flex justify-center mt-6 text-lg text-[#556F5F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, facilis.</div>
            <div className='ClientSay-container flex justify-center mt-24 space-x-14 '>
              <div className='ClientSay-inner-container rounded-2xl'>
                <div className='ClientSay-image flex justify-center -mt-8'>
                  <img src={ClinetImage1} alt="" />
                </div>
                <div className='ClientSay-desc text-lg text-[#938888] mt-3 mr-5 ml-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ualiquam, ptaliquam, purus sit amet Lorem ipsum dolor sit amet.
                </div>
                <div className='Client-Name text-lg flex justify-center mt-5 font-medium'>Divyesh Sarvaiya</div>
                <div className='Client-position text-lg flex justify-center mt-2 font-medium text-[#938888]'>(Web Devloper)</div>
              </div>

              <div className='ClientSay-inner-container rounded-2xl'>
                <div className='ClientSay-image flex justify-center -mt-8'>
                  <img src={ClinetImage2} alt="" />
                </div>
                <div className='ClientSay-desc text-lg text-[#938888] mt-3 mr-5 ml-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ualiquam, ptaliquam, purus sit amet Lorem ipsum dolor sit amet.
                </div>
                <div className='Client-Name text-lg flex justify-center mt-5 font-medium'>Divyesh Sarvaiya</div>
                <div className='Client-position text-lg flex justify-center mt-2 font-medium text-[#938888]'>(Web Devloper)</div>
              </div>

              <div className='ClientSay-inner-container rounded-2xl'>
                <div className='ClientSay-image flex justify-center -mt-8'>
                  <img src={ClinetImage3} alt="" />
                </div>
                <div className='ClientSay-desc text-lg text-[#938888] mt-3 mr-5 ml-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ualiquam, ptaliquam, purus sit amet Lorem ipsum dolor sit amet.
                </div>
                <div className='Client-Name text-lg flex justify-center mt-5 font-medium'>Divyesh Sarvaiya</div>
                <div className='Client-position text-lg flex justify-center mt-2 font-medium text-[#938888]'>(Web Devloper)</div>
              </div>

            </div>
        </div>
    </>
  )
}

export default ClientSay