import React from 'react'
import "./CompanyLogos.css"
import CompanyLogo1 from "../../assets/CompanyLogo1.webp";
import CompanyLogo2 from "../../assets/CompanyLogo2.webp";
import CompanyLogo3 from "../../assets/CompanyLogo3.webp";
import CompanyLogo4 from "../../assets/CompanyLogo4.webp";
import CompanyLogo5 from "../../assets/CompanyLogo5.webp";
import CompanyLogo6 from "../../assets/CompanyLogo6.webp";

const CompanyLogos = () => {
  return (
    <>
        <div className='CompanyLogos-main-container mt-32'>
            <div className='CompanyLogos-inner-container flex justify-center space-x-10'>
            <div className='CompanyLogos-container rounded-[100%]'>
                 <img src={CompanyLogo1} alt=""  className='companyLogos-image mt-6 ml-8 transition-transform duration-1000 ease-in-out transform hover:rotate-180  overflow-clip '/>
            </div>
            <div className='CompanyLogos-container rounded-[100%]'>
                 <img src={CompanyLogo2} alt=""  className='companyLogos-image mt-6 ml-8 transition-transform duration-1000 ease-in-out transform hover:rotate-180  overflow-clip'/>
            </div>
            <div className='CompanyLogos-container rounded-[100%]'>
                 <img src={CompanyLogo3} alt=""  className='companyLogos-image mt-6 ml-8 transition-transform duration-1000 ease-in-out transform hover:rotate-90  overflow-clip'/>
            </div>
            <div className='CompanyLogos-container rounded-[100%]'>
                 <img src={CompanyLogo4} alt=""  className='companyLogos-image mt-6 ml-8 transition-transform duration-1000 ease-in-out transform hover:rotate-90  overflow-clip'/>
            </div>
            <div className='CompanyLogos-container rounded-[100%]'>
                 <img src={CompanyLogo5} alt=""  className='companyLogos-image mt-6 ml-8 transition-transform duration-1000 ease-in-out transform hover:rotate-90  overflow-clip'/>
            </div>
            <div className='CompanyLogos-container rounded-[100%]'>
                 <img src={CompanyLogo6} alt=""  className='companyLogos-image mt-6 ml-8  transition-transform duration-1000 ease-in-out transform hover:rotate-90  overflow-clip'/>
            </div>
            </div>
        </div>
    </>
  )
}

export default CompanyLogos