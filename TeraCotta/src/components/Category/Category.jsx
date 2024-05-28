import React from 'react';
import "./Category.css";
import CategoryImage1 from "../../assets/CategoryImage1.png";
import CategoryImage2 from "../../assets/CategoryImage2.webp";
import CategoryImage3 from "../../assets/CategoryImage3.webp";
import CategoryImage4 from "../../assets/categoryImage4.webp";
import CategoryImage5 from "../../assets/categoryImage5.webp";
import CategoryImage6 from "../../assets/categoryImage6.webp";

const Category = () => {
  return (
    <>
    <div className='Category-main-container h-[550px] bg-[#fef7ec] mt-24'>
      <div className='Category-title pt-[50px] flex justify-center text-3xl font-bold'>Exclusive&nbsp;<span className='text-[#556F5F]'>Category</span> </div>
      <div className='Category-desc flex justify-center text-lg mt-5 text-[#556F5F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia atque sit.</div>
      <div className='Category-inner-container flex justify-center space-x-5 mt-28 '>
        <div className='Category-container relative rounded-3xl duration-1000 transition-colors hover:border-2 hover:border-[#eaeaea] '>
          <div className='Category-image absolute'>
            <img src={CategoryImage1} alt=""  className=' ml-8 -mt-20 object-cover transition-transform duration-1000 ease-in-out transform hover:-translate-y-4 '/>
          </div>
          <div className='Category-name mt-28 flex justify-center text-xl '>Chocolate</div>
        </div>

        <div className='Category-container relative rounded-3xl duration-1000 transition-colors hover:border-2 hover:border-[#eaeaea] '>
          <div className='Category-image absolute'>
            <img src={CategoryImage2} alt=""  className=' ml-8 -mt-20 object-cover transition-transform duration-1000 ease-in-out transform hover:-translate-y-4 '/>
          </div>
          <div className='Category-name mt-28 flex justify-center text-xl '>Chocolate</div>
        </div>

        <div className='Category-container relative rounded-3xl duration-1000 transition-colors hover:border-2 hover:border-[#eaeaea] '>
          <div className='Category-image absolute'>
            <img src={CategoryImage3} alt=""  className=' ml-8 -mt-20 object-cover transition-transform duration-1000 ease-in-out transform hover:-translate-y-4 '/>
          </div>
          <div className='Category-name mt-28 flex justify-center text-xl '>Chocolate</div>
        </div>

        <div className='Category-container relative rounded-3xl duration-1000 transition-colors hover:border-2 hover:border-[#eaeaea] '>
          <div className='Category-image absolute'>
            <img src={CategoryImage4} alt=""  className=' ml-8 -mt-20 object-cover transition-transform duration-1000 ease-in-out transform hover:-translate-y-4 '/>
          </div>
          <div className='Category-name mt-28 flex justify-center text-xl '>Chocolate</div>
        </div>

        <div className='Category-container relative rounded-3xl duration-1000 transition-colors hover:border-2 hover:border-[#eaeaea] '>
          <div className='Category-image absolute'>
            <img src={CategoryImage5} alt=""  className=' ml-8 -mt-20 object-cover transition-transform duration-1000 ease-in-out transform hover:-translate-y-4 '/>
          </div>
          <div className='Category-name mt-28 flex justify-center text-xl '>Chocolate</div>
        </div>

        <div className='Category-container relative rounded-3xl duration-1000 transition-colors hover:border-2 hover:border-[#eaeaea] '>
          <div className='Category-image absolute'>
            <img src={CategoryImage6} alt=""  className=' ml-8 -mt-20 object-cover transition-transform duration-1000 ease-in-out transform hover:-translate-y-4 '/>
          </div>
          <div className='Category-name mt-28 flex justify-center text-xl '>Chocolate</div>
        </div>
        </div>

        <div className='Category-btn flex justify-center mt-8'>
          <button className='uppercase h-12 w-32 rounded-3xl text-lg bg-orange-300 hover:bg-[#556F5F] hover:text-white'> View ALl</button>
        </div>
    </div>
    </>
  )
}

export default Category