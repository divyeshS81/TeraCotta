import React from 'react'
import "./Product.css"

const Product = () => {
  return (
   <>
    <div className='product-main-container mt-28'>
        <div className='product-heading font-bold text-4xl text-center'>Exclusive <span className='text-[#556F5F]'>Products</span></div>
        <div className='product-heading-desc text-center mt-5 text-lg text-[#556F5F]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, magnam?</div>
            <div className='product-inner-container mt-8 flex'>
                <div className='product-cards'>
                    <div className='product-image'></div>
                    <div className='product-stars'></div>
                    <div className='product-title'></div>
                    <div className='product-price'></div>
                </div>
                <div className='product-cards'>
                <div className='product-image'></div>
                    <div className='product-stars'></div>
                    <div className='product-title'></div>
                    <div className='product-price'></div>
                </div>
                <div className='product-cards'>
                <div className='product-image'></div>
                    <div className='product-stars'></div>
                    <div className='product-title'></div>
                    <div className='product-price'></div>
                </div>
                <div className='product-cards'>
                <div className='product-image'></div>
                    <div className='product-stars'></div>
                    <div className='product-title'></div>
                    <div className='product-price'></div>
                </div>
            </div>
        </div>
       
            <div className='product-inner-container flex'>
                <div className='product-cards'>
                <div className='product-image'></div>
                    <div className='product-stars'></div>
                    <div className='product-title'></div>
                    <div className='product-price'></div>
                </div>
                <div className='product-cards'>
                <div className='product-image'></div>
                    <div className='product-stars'></div>
                    <div className='product-title'></div>
                    <div className='product-price'></div>
                </div>
                <div className='product-cards'>
                <div className='product-image'></div>
                    <div className='product-stars'></div>
                    <div className='product-title'></div>
                    <div className='product-price'></div>
                </div>
                <div className='product-cards'>
                <div className='product-image'></div>
                    <div className='product-stars'></div>
                    <div className='product-title'></div>
                    <div className='product-price'></div>
                </div>
            </div>
   
        <div className='view-btn uppercase '>view all</div>
   </>
  )
}

export default Product