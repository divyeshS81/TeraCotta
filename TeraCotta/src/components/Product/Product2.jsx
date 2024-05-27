import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Image1 from '../../assets/Image1.webp';
import Image1Hover from '../../assets/Image2.webp'; // Add hover images
import Image2 from '../../assets/Image2.webp';
import Image2Hover from '.../../assets/Image3.webp';
import Image3 from '../../assets/Image4.webp';
import Image3Hover from '../../assets/Image5.webp';
import Image4 from '../../assets/Image7.webp';
import Image4Hover from '../../assets/';
import Image7 from './path-to-image7.jpg';
import Image7Hover from './path-to-image7-hover.jpg';
import Image10 from './path-to-image10.jpg';
import Image10Hover from './path-to-image10-hover.jpg';
import Image11 from './path-to-image11.jpg';
import Image11Hover from './path-to-image11-hover.jpg';
import Image13 from './path-to-image13.jpg';
import Image13Hover from './path-to-image13-hover.jpg';

const ProductCard = ({ image, hoverImage, title, originalPrice, salePrice, rating, isSoldOut }) => {
  return (
    <div className='product-cards cursor-pointer' onMouseEnter={(e) => e.currentTarget.querySelector('img').src = hoverImage} onMouseLeave={(e) => e.currentTarget.querySelector('img').src = image}>
      <div className='product-image relative'>
        <img src={image} alt='' className='images' />
        {salePrice && <div className='sale-btn absolute rounded-full bg-[#7FBC1E] text-[#ffffff] border-none p-3 -mt-72 ml-2'>sale</div>}
        {isSoldOut && <div className='sold-out-btn absolute border-none rounded text-white bg-[#C92C2C] h-6 w-16 -mt-72 ml-48 p-1'>Sold Out</div>}
      </div>
      <div className={`product-stars absolute flex text-xl space-x-1 ml-20 text-[#fcba03] -mt-6`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <AiFillStar key={index} className={index < rating ? '' : 'text-gray-300'} />
        ))}
      </div>
      <div className='product-title text-lg text-center mt-4'>{title}</div>
      <div className='product-price text-lg ml-20 mt-2'>
        {originalPrice && <span className='line-through text-[#999]'>{originalPrice}</span>} {salePrice ? salePrice : originalPrice}
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className='product-main-container mt-28'>
      <div className='product-heading font-bold text-4xl text-center'>
        Exclusive <span className='text-[#556F5F]'>Products</span>
      </div>
      <div className='product-heading-desc text-center mt-5 text-lg text-[#556F5F]'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, magnam?
      </div>
      <div className='product-inner-container mt-14 flex space-x-14 ml-36 mr-36'>
        <ProductCard
          image={Image1}
          hoverImage={Image1Hover}
          title="Wowed Art"
          originalPrice="$800"
          salePrice="$75.00"
          rating={5}
        />
        <ProductCard
          image={Image2}
          hoverImage={Image2Hover}
          title="Woodsy Art"
          originalPrice="$950"
          salePrice="$60.00"
          rating={5}
        />
        <ProductCard
          image={Image4}
          hoverImage={Image4Hover}
          title="Wert Art"
          originalPrice="$80.00"
          salePrice=""
          rating={3}
        />
        <ProductCard
          image={Image7}
          hoverImage={Image7Hover}
          title="The Craft"
          originalPrice="$850"
          salePrice="$750.00"
          rating={4}
        />
      </div>
      <div className='product-inner-container flex mt-8 space-x-14 ml-36 mr-36'>
        <ProductCard
          image={Image3}
          hoverImage={Image3Hover}
          title="Proof Art"
          originalPrice="$700"
          salePrice="$75.00"
          rating={5}
        />
        <ProductCard
          image={Image10}
          hoverImage={Image10Hover}
          title="Woodsy Art"
          originalPrice=""
          salePrice="$70.00"
          rating={5}
          isSoldOut={true}
        />
        <ProductCard
          image={Image11}
          hoverImage={Image11Hover}
          title="Presented Art"
          originalPrice="$80.00"
          salePrice=""
          rating={3}
        />
        <ProductCard
          image={Image13}
          hoverImage={Image13Hover}
          title="Praised Art"
          originalPrice="$85"
          salePrice="$75.00"
          rating={4}
          isSoldOut={true}
        />
      </div>
      <div className='view-btn uppercase '>view all</div>
    </div>
  );
};

export default Products;
