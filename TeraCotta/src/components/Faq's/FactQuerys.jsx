import React, { useState } from 'react';
import "./FactQuerys.css";
import FaqsImage from "../../assets/faqs-image.webp";

const FactQuerys = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        "What is terracotta made from?",
        "What is so special about terracotta?",
        "What is terracotta used for?",
        "Why is terracotta best for plants?",
        "What's the difference between clay and terracotta?"
    ];

    return (
        <>
            <div className='FactQuerys-main-container mt-32 h-[600px]'>
                <div className='FactQuerys-title flex justify-center mt-10 text-3xl font-medium'>FAQ'&nbsp;<span className='text-[#556F5F]'>s</span></div>
                <div className='FactQuerys-desc flex justify-center mt-5 text-lg text-[#556F5F]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia atque sit.</div>
                <div className='FactQuerys-container  flex-col items-center mt-10 space-y-4 ml-[300px] w-[600px]'>  
                    {faqs.map((faq, index) => (
                        <div key={index} className='FactQuerys-inner-container w-full max-w-xl'>
                            <div className="border rounded-xl border-gray-200 py-2">
                                <div className="flex justify-between items-center  p-1">
                                    <h2 className="text-xl font-semibold">{faq}</h2>
                                    <button onClick={() => toggleOpen(index)} className="text-2xl font-bold">
                                        {openIndex === index ? '-' : '+'}
                                    </button>
                                </div>
                                {openIndex === index && (
                                    <div className="mt-2 p-4 text-[#556F5F] border-t border-gray-300">
                                        Terracotta is made from a type of clay that, when fired, assumes a distinctive reddish-brown color due to its iron content. It is molded into various shapes and then hardened by being baked at high temperatures.
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='FactQuerys-inner-conatiner  -mt-[370px] rounded-md ml-[900px] h-[400px] w-[300px]'>
                   <img src={FaqsImage} alt="" className='FactQuerys-images rounded-md  hover:scale-105  '/>
                </div>
            </div>
        </>
    );
}

export default FactQuerys;
