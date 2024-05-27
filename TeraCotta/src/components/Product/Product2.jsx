import React, { useState } from "react";
import { AiFillStar,AiOutlineShoppingCart, AiOutlineEye , AiOutlineHeart} from "react-icons/ai";
import Image1 from "../../assets/image1.webp";
import Image1Hover from "../../assets/image2.webp"; // Add hover images
import Image2 from "../../assets/image2.webp";
import Image2Hover from "../../assets/image3.webp";
import Image3 from "../../assets/image4.webp";
import Image3Hover from "../../assets/image5.webp";
import Image4 from "../../assets/image7.webp";
import Image4Hover from "../../assets/image6.webp";
import Image7 from "../../assets/image6.webp";
import Image7Hover from "../../assets/image11.webp";
import Image10 from "../../assets/image10.webp";
import Image10Hover from "../../assets/image9.webp";
import Image11 from "../../assets/image11.webp";
import Image11Hover from "../../assets/image5.webp";
import Image13 from "../../assets/image13.webp";
import Image13Hover from "../../assets/image12.webp";
import "./Product2.css";

const ProductCard = ({
    image,
    hoverImage,
    title,
    originalPrice,
    salePrice,
    rating,
    isSoldOut,
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
                    <div className="sale-btn absolute rounded-full bg-[#7FBC1E] text-[#ffffff] border-none p-3 -mt-64 ml-2">
                        sale
                    </div>
                )}
                {!isHoverd && isSoldOut && (
                    <div className="sold-out-btn absolute border-none rounded text-white bg-[#C92C2C] h-6 w-16 -mt-64 ml-48 p-1">
                        Sold Out
                    </div>
                )}
                 {isHoverd && (
                    <div className="hover-icons absolute h-20  -mt-64 ml-56 space-y-1">
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
                className={`product-stars absolute flex text-xl space-x-1 ml-20 text-[#fcba03] -mt-6`}
            >
                {Array.from({ length: 5 }).map((_, index) => (
                    <AiFillStar
                        key={index}
                        className={index < rating ? "" : "text-transparent"}
                    />
                ))}
            </div>
            <div className="product-title text-lg text-center mt-4">{title}</div>
            <div className="product-price text-lg ml-20 mt-2">
                {originalPrice && (
                    <span className="line-through text-[#999]">{originalPrice}</span>
                )}{" "}
                {salePrice ? salePrice : originalPrice}
            </div>
        </div>
    );
};

const Products = () => {
    return (
        <div className="product-main-container mt-28">
            <div className="product-heading font-bold text-4xl text-center">
                Exclusive <span className="text-[#556F5F]">Products</span>
            </div>
            <div className="product-heading-desc text-center mt-5 text-lg text-[#556F5F]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, magnam?
            </div>
            <div className="product-inner-container mt-14 flex space-x-14 ml-36 mr-36">
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
            <div className="product-inner-container flex mt-8 space-x-14 ml-36 mr-36">
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
            <div className="view-btn flex justify-center mt-10">
                <button className="view-button bg-[#F6B76F] w-36 h-10 rounded-3xl text-lg">View All</button>
            </div>
        </div>
    );
};

export default Products;
