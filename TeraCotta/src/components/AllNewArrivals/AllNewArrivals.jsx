import React from 'react'
import "./AllNewArrivals.css";
import AllNewArrivalsImage from "../../assets/AllNewArrivals.webp";
import AllNewArrivalsImage2 from "../../assets/AllNewArrivals2.webp";
import AllNewArrivalsImage3 from "../../assets/AllNewArrivals3.webp";
import AllNewArrivalsImage1 from "../../assets/AllNewArrivals1.webp";

const AllNewArrivals = () => {
  return (
    <>
        <div className='AllNewArrivals-main-container h-[400px] mt-32 bg-[#fef7ec]'>
            <div className='AllNewArrivals-inner-container relative flex justify-center'>

                <div className='AllNewArrivals-LeftImage rounded-2xl absolute flex justify-start left-0 mt-[240px] ml-[40px]  h-[230px] w-[180px]'>
                    <div className='AllNewArrivals-Images-container  ml-4 '>
                        <img src={AllNewArrivalsImage} alt="" className='AllNewArrivals-Images absolute rounded-2xl cursor-pointer  hover:scale-105'></img>
                    </div>
                </div>

                <div className='AllNewArrivals-LeftImage rounded-2xl absolute flex justify-start left-0 mt-[220px] ml-[240px]  h-[230px] w-[180px]'>
                    <div className='AllNewArrivals-Images-container ml-4  '>
                         <img src={AllNewArrivalsImage1} alt="" className='AllNewArrivals-Images absolute rounded-2xl  cursor-pointer hover:scale-105'></img>
                    </div>
                </div>

                <div className='AllNewArrivals-container mt-14 w-[500px] '>
                    <p className='uppercase text-lg flex justify-center text-[#556F5F] mt-10'>All new arrivals</p>
                    <p className='text-3xl font-bold flex justify-center mt-3'>Exclusive&nbsp;<span className='text-[#556F5F]'>Category</span> </p>
                    <p className=' text-[#556F5F] ml-10 mr-10 text-center mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia atque sit.</p>
                    <div className='AllNewArrivals-btn flex justify-center mt-5'>
                      <button className='bg-orange-300 h-10 w-32 uppercase rounded-3xl hover:text-white hover:bg-[#556F5F]'>Shop Now</button>
                    </div>
                </div>
                
                <div className='AllNewArrivals-RightImage rounded-2xl absolute flex justify-start right-0 -mt-[70px] mr-[40px]  h-[230px] w-[180px]'>
                    <div className='AllNewArrivals-Images-container ml-4'>
                        <img src={AllNewArrivalsImage3} alt="" className='AllNewArrivals-Images absolute rounded-2xl cursor-pointer  hover:scale-105'></img>
                    </div>
                </div>

                <div className='AllNewArrivals-RightImage rounded-2xl absolute flex justify-start right-0 -mt-[40px] mr-[240px]  h-[230px] w-[180px]'>
                    <div className='AllNewArrivals-Images-container ml-4'>
                         <img src={AllNewArrivalsImage2} alt="" className='AllNewArrivals-Images absolute rounded-2xl cursor-pointer  hover:scale-105'></img>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default AllNewArrivals