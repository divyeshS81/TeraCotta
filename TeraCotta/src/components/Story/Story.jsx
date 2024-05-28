import React from 'react'
import "./Story.css";
import SinceLine from "../../assets/since-line.png";
import Story1 from "../../assets/Story1.webp";
import Story2 from "../../assets/story2.webp";
import Story3 from "../../assets/story3.webp";
import Story4 from "../../assets/story4.webp";


const Story = () => {
  return (
    <>
        <div className='Story-main-container bg-[#fef7ec] mt-5'>
            <div className='Story-Title flex justify-center text-3xl font-bold pt-10'> Every Canvas Has a&nbsp;<span className='text-[#556F5F]'>Story</span> </div>
            <div className='Story-desc flex justify-center text-lg text-[#556F5F] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia atque sit.</div>
            <div className='Story-image ml-20 mt-10 flex'>
                <img src={SinceLine} alt=""  className='relative'/>
                <div className='line-dot h-3 w-3 rounded-full absolute ml-2 mt-1 text-[#556F5F] hover:bg-orange-400'><p className='text-[#556F5F] mt-3 -ml-2'>1972</p></div>
                <div className='line-dot h-3 w-3 rounded-full absolute mt-4 ml-96 text-[#556F5F] hover:bg-orange-400'><p className='text-[#556F5F] mt-3 -ml-2'>1982</p></div>
                <div className='line-dot h-3 w-3 rounded-full absolute ml-[820px] mt-2 text-[#556F5F] hover:bg-orange-400 '><p className='text-[#556F5F] mt-3 -ml-2'>1992</p></div>
                <div className='line-dot h-3 w-3 rounded-full absolute end-28 mt-4 text-[#556F5F] hover:bg-orange-400' ><p className='text-[#556F5F] mt-3 -ml-2'>2023</p></div>
            </div>
            <div className='Story-image-conatiner flex justify-center space-x-10 mt-14'>
                    <div className='Story-inner-container'><img src={Story1} alt="" className='story-images rounded-md  hover:scale-105  '/></div>
                    <div className='Story-inner-container '><img src={Story2} alt="" className='story-images rounded-md  hover:scale-105  '/></div>
                    <div className='Story-inner-container'><img src={Story3} alt="" className='story-images rounded-md  hover:scale-105  '/></div>
                    <div className='Story-inner-container'><img src={Story4} alt="" className='story-images rounded-md  hover:scale-105  '/></div>
            </div>
            <div className='Story-btn flex justify-center mt-16'>
                <button className='uppercase h-10 w-32 rounded-3xl bg-orange-300 border-none text-[15px] hover:bg-[#556F5F] hover:text-white'>Shop Now</button>
            </div>
        </div>
    </>
  )
}

export default Story