import React from 'react'
import "./Blog.css";
import BlogImage1 from "../../assets/blog1.webp";
import BlogImage2 from "../../assets/blog2.webp";
import BlogImage3 from "../../assets/blog3.webp";

const Blog = () => {
  return (
   <>
        <div className='blog-main-container h-[600px] '>
            <div className='blog-title flex justify-center text-3xl font-bold font-medium mt-10'>Our Latest Blog</div>
            <div className='blog-desc flex justify-center text-lg text-[#556F5F] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia atque sit.</div>
            <div className='blog-container flex justify-center space-x-10 '> 
                <div className='blog-inner-container h-[450px] rounded-3xl w-[450px] relative'>

                    <div className='blog-image h-[300px] rounded-3xl w-[450px]'>
                        <img src={BlogImage1} alt="" className='blog-images h-[300px] w-[450px] rounded-3xl hover:scale-105' />
                    </div>
                    <div className='blod-border rounded-b-3xl'>
                        <div className='blog-date h-10 w-36 -mt-10 rounded-tr-3xl text-white bg-[#556F5F] absolute p-1 text-lg'>29 May 2024</div>
                        <div className='blog-sub-title flex justify-center mt-2 text-[#556F5F] text-lg'>Artem - Digital Marketing...</div>
                        <div className='blog-sub-desc ml-5 flex justify-center text-lg text-[#556F5F] mt-1'>Faded short sleeves t-shirt with high neckline. Soft and stretchy m...</div>
                        <div className='blog-btn flex justify-center uppercase text-[#999]'><p className='border-b'>read more</p></div>
                    </div>
                </div>

                <div className='blog-inner-container h-[450px] rounded-3xl w-[450px] relative'>

                    <div className='blog-image h-[300px] rounded-3xl w-[450px]'>
                        <img src={BlogImage2} alt="" className='blog-images h-[300px] w-[450px] rounded-3xl hover:scale-105' />
                    </div>
                    <div className='blod-border rounded-b-3xl'>
                        <div className='blog-date h-10 w-36 -mt-10 rounded-tr-3xl text-white bg-[#556F5F] absolute p-1 text-lg'>29 May 2024</div>
                        <div className='blog-sub-title flex justify-center mt-2 text-[#556F5F] text-lg'>Artem - Digital Marketing...</div>
                        <div className='blog-sub-desc ml-5 flex justify-center text-lg text-[#556F5F] mt-1'>Faded short sleeves t-shirt with high neckline. Soft and stretchy m...</div>
                        <div className='blog-btn flex justify-center uppercase text-[#999]'><p className='border-b'>read more</p></div>
                    </div>
                </div>

                <div className='blog-inner-container h-[450px] rounded-3xl w-[450px] relative'>

                    <div className='blog-image h-[300px] rounded-3xl w-[450px]'>
                        <img src={BlogImage3} alt="" className='blog-images h-[300px] w-[450px] rounded-3xl hover:scale-105' />
                    </div>
                    <div className='blod-border rounded-b-3xl'>
                        <div className='blog-date h-10 w-36 -mt-10 rounded-tr-3xl text-white bg-[#556F5F] absolute p-1 text-lg'>29 May 2024</div>
                        <div className='blog-sub-title flex justify-center mt-2 text-[#556F5F] text-lg'>Artem - Digital Marketing...</div>
                        <div className='blog-sub-desc ml-5 flex justify-center text-lg text-[#556F5F] mt-1'>Faded short sleeves t-shirt with high neckline. Soft and stretchy m...</div>
                        <div className='blog-btn flex justify-center uppercase text-[#999]'><p className='border-b'>read more</p></div>
                    </div>
                </div>
               
            </div>
        </div>
   </>
  )
}

export default Blog