import React, {useState} from 'react';
import "./WorldOldCraft.css";   
import CountdownTimer from './CountDownTimer';
import { AiFillStar,AiOutlineShoppingCart, AiOutlineEye , AiOutlineHeart} from "react-icons/ai";
import Image1 from "../../assets/image1.webp";
import Image1Hover from "../../assets/image2.webp"; // Add hover images
import Image2 from "../../assets/image2.webp";
import Image2Hover from "../../assets/image3.webp";
import "../Product/Product2.css";


const WorldOldCraftCard = ({
  image,
  hoverImage,
  title,
  originalPrice,
  salePrice,
  rating,

}) => {
  const [isHoverd, setIsHoverd ] = useState(false);
  return (
      <div
          className="product-cards rounded-sm cursor-pointer"
          onMouseEnter={() => setIsHoverd(true)} 
          onMouseLeave={() => setIsHoverd(false)}>

          <div className="product-image relative">
              <img src={isHoverd ? hoverImage : image} alt="" className="images" />
              {salePrice && (
                  <div className="sale-btn absolute rounded-full bg-[#7FBC1E] text-[#ffffff] border-none p-3 -mt-80 ml-2">
                      sale
                  </div>
              )}

               {isHoverd && (
                  <div className="hover-icons absolute h-20  -mt-[330px] end-0 space-y-1">
                      <div className="hover-icons-inner-container bg-[#ffffff] h-8 w-8 rounded-full">
                          <AiOutlineEye className="hover-icon  rounded-3xl m-2 text-[#999]" />
                      </div>
                      <div className="hover-icons-inner-container  bg-[#ffffff] h-8 w-8 rounded-full">
                          <AiOutlineHeart className="hover-icon  rounded-3xl ml-2 mt-2 text-[#999] " />
                      </div>
                      <div className="hover-icons-inner-container  bg-[#ffffff] h-8 w-8 rounded-full">
                          <AiOutlineShoppingCart className="hover-icon rounded-3xl ml-2 mt-2 text-[#999]" />
                      </div>
                  </div>
               )}
          </div> 
          <div
              className={`product-stars absolute flex ml-28  text-xl space-x-1  text-[#fcba03] -mt-6`}
          >
              {Array.from({ length: 5 }).map((_, index) => (
                  <AiFillStar
                      key={index}
                      className={index < rating ? "" : "text-transparent"}
                  />
              ))}
          </div>
          <div className="product-title text-lg text-center mt-4">{title}</div>
          <div className="product-price text-ce text-lg flex justify-center mt-2">
              {originalPrice && (
                  <span className="line-through text-[#999]">{originalPrice}</span>
              )}{" "}
              {salePrice ? salePrice : originalPrice}
          </div>
      </div>
  );
};

const WorldOldCarft = () => {

  return (
   <>
    <div className='WorldOldCraft-main-container mt-24 h-[500px] w-[100%]'>
      <div className='WorldOldCraft-inner-container mt-5 flex justify-between'>
        <div className='WorldOldCraft-inner-container1 ml-36'>
          <div className='WorldOldCraft-title text-3xl font-semibold'>The World's Oldest</div>
          <div className='WorldOldCraft-title2 text-3xl font-semibold text-[#556F5F]'>Craft</div>

          <div className='WorldOldCraft-desc text-lg mt-2 text-[#556F5F] font-medium'>
              <div className='WorldOutCraft-desc1 '>Discover our fantastic early booking discounts & start planning your journey.</div>
              <div className='WorldOutCraft-desc2 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className='WorldOutCraft-desc3 mt-2'>Gravida ac consectetur icitudin et tortor, id. Est purus egestas</div>
          </div> 

          <div className='WorldOldCraft-CountDown-container flex justify-center space-x-7 mt-5'>
              <CountdownTimer />
          </div>

          <div className='WorldOldCraft-btn h-10 w-32 bg-orange-300 mt-4 hover:bg-[#556F5F] hover:text-white rounded-3xl'>
            <button className=' uppercase flex justify-center pt-1.5 pl-3.5 '>Shop more</button>
          </div>
        </div>
         <div className="product-main-container -mt-12">
            
            <div className="product-inner-container mt-14 flex space-x-14 ml-36 mr-36">
                <WorldOldCraftCard
                    image={Image1}
                    hoverImage={Image1Hover}
                    title="Wowed Art"
                    originalPrice="$800"
                    salePrice="$75.00"
                    rating={5}
                />
                <WorldOldCraftCard
                    image={Image2}
                    hoverImage={Image2Hover}
                    title="Woodsy Art"
                    originalPrice="$950"
                    salePrice="$60.00"
                    rating={5}
                />
                </div>
             </div>
        </div> 
   </div>
   </>
  )
}

export default WorldOldCarft