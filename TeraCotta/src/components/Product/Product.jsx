import React from 'react'
import "./Product.css"
import Image1 from "../../assets/image1.webp";
import Image2 from "../../assets/image2.webp";
import Image3 from "../../assets/image3.webp";
import Image4 from "../../assets/image4.webp";
import Image5 from "../../assets/image5.webp";
import Image6 from "../../assets/image6.webp";
import Image7 from "../../assets/image7.webp";
import Image8 from "../../assets/image8.webp";
import Image9 from "../../assets/image9.webp";
import Image10 from "../../assets/image10.webp";
import Image11 from "../../assets/image11.webp";
import Image12 from "../../assets/image12.webp";
import Image13 from "../../assets/image13.webp";
import { AiFillStar } from "react-icons/ai";

const Product = () => {
  return (
   <>
    <div className='product-main-container mt-28'>
        <div className='product-heading font-bold text-4xl text-center'>Exclusive <span className='text-[#556F5F]'>Products</span></div>
        <div className='product-heading-desc text-center mt-5 text-lg text-[#556F5F]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, magnam?</div>
            <div className='product-inner-container mt-14 flex space-x-14 ml-36 mr-36'>
                <div className='product-cards cursor-pointer'>
                    <div className='product-image relative '>
                        <img src={Image1} alt='' className='images1'/>
                        <div className='sale-btn absolute rounded-full bg-[#7FBC1E] text-[#ffffff] border-none p-3 -mt-72 ml-2'>sale</div>
                    </div>
                    <div className='product-stars absolute flex text-xl space-x-1 ml-20 text-[#fcba03] -mt-6'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className='product-title  text-lg text-center mt-4'>Wowed Art</div>
                    <div className='product-price text-lg ml-20 mt-2'><span className='line-through text-[#999] '>$800</span> $75.00</div>
                </div>
                <div className='product-cards cursor-pointer'>
                    <div className='product-image'>
                        <img src={Image2} alt='' className='images2'/>
                        <div className='sale-btn absolute rounded-full bg-[#7FBC1E] text-[#ffffff] border-none p-3 -mt-72 ml-2'>sale</div>
                    </div>
                    <div className='product-stars absolute flex text-xl space-x-1 ml-20 text-[#fcba03] -mt-6'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className='product-title  text-lg text-center mt-4'>Woodsy Art</div>
                    <div className='product-price text-lg ml-20 mt-2'><span className='line-through text-[#999]'>$950</span> $60.00</div>
                </div>
                <div className='product-cards cursor-pointer'>
                    <div className='product-image'>
                        <img src={Image4} alt='' className='images3'/>
                    </div>
                    <div className='product-stars absolute flex text-xl space-x-1 ml-28 text-[#fcba03] -mt-6'><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className='product-title  text-lg text-center mt-4'>Wert Art</div>
                    <div className='product-price ml-28 mt-2 text-lg'>$80.00</div>
                </div>
                <div className='product-cards cursor-pointer'>
                    <div className='product-image'>
                        <img src={Image7} alt='' className='images4'/>
                        <div className='sale-btn absolute rounded-full bg-[#7FBC1E]  text-[#ffffff] border-none p-3 -mt-72 ml-2'>sale</div>
                    </div>
                    <div className='product-stars absolute flex text-xl space-x-1 ml-20 text-[#fcba03] -mt-6'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className='product-title  text-lg text-center mt-4'>The Craft</div>
                    <div className='product-price ml-20 mt-2 text-lg'><span className='line-through text-[#999]'>$850</span> $750.00 </div>
                </div>
            </div>
      
       
            <div className='product-inner-container flex mt-8 space-x-14 ml-36 mr-36'>
                <div className='product-cards cursor-pointer'>
                    <div className='product-image'>
                        <img src={Image3} alt='' className='images5 relative'/>
                        <div className='sale-btn absolute rounded-full bg-[#7FBC1E] text-[#ffffff] border-none p-3 -mt-72 ml-2'>sale</div>
                    </div>
                    <div className='product-stars absolute flex text-xl space-x-1 ml-20 text-[#fcba03] -mt-6'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className='product-title  text-lg text-center mt-4'>Proof Art</div>
                    <div className='product-price ml-20 mt-2 text-lg'><span className='line-through text-[#999]'>$700</span> $75.00</div>
                </div>
                <div className='product-cards cursor-pointer'>
                    <div className='product-image'>
                        <img src={Image10} alt='' className='images6'/>
                        <div className='sale-btn absolute rounded-full bg-[#7FBC1E] text-[#ffffff] border-none p-3 -mt-72 ml-2'>sale</div>
                        <div className='sold-out-btn absolute border-none rounded text-white bg-[#C92C2C] h-6 w-16 -mt-72 ml-48 p-1'>Sold Out</div>
                    </div>
                    <div className='product-stars absolute flex text-xl space-x-1 ml-20 text-[#fcba03] -mt-6'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className='product-title  text-lg text-center mt-4'>Woodsy Art</div>
                    <div className='product-price ml-28 mt-2 text-lg'>$70.00</div>
                </div>
                <div className='product-cards cursor-pointer'>
                    <div className='product-image'>
                        <img src={Image11} alt='' className='images7'/>
                    </div>
                    <div className='product-stars absolute flex text-xl space-x-1 ml-28 text-[#fcba03] -mt-6'><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className='product-title  text-lg text-center mt-4'>Presented Art</div>
                    <div className='product-price ml-28 mt-2 text-lg'>$80.00</div>
                </div>
                <div className='product-cards cursor-pointer'>
                    <div className='product-image'>
                        <img src={Image13} alt='' className='images8'/>
                        <div className='sale-btn absolute rounded-full bg-[#7FBC1E] text-[#ffffff] border-none p-3 -mt-72 ml-2'>sale</div>
                        <div className='sold-out-btn absolute border-none rounded text-white bg-[#C92C2C] h-6 w-16 -mt-72 ml-48 p-1'>Sold Out</div>
                    </div>
                    <div className='product-stars absolute flex text-xl space-x-1 ml-20 text-[#fcba03] -mt-6'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className='product-title  text-lg text-center mt-4'>Praised Art</div>
                    <div className='product-price ml-20 mt-2 text-lg'><span className='line-through text-[#999]'>$85</span> $75.00</div>
                </div>
            </div>
            <div className='view-btn uppercase '>view all</div>
        </div>
   </>
  )
}

export default Product