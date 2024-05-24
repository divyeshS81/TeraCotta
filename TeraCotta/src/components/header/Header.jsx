import React from 'react'
import "./Header.css"
import { BsCart2 } from "react-icons/bs"
import { CiHeart, CiSearch } from "react-icons/ci"
import { GoPerson } from "react-icons/go";
import Logo from "../../assets/Logo.webp"

const Header = () => {

  return (
    <>
    <div className='header-container bg-[#ffffff] fixed h-24 text-[#556F5F]'>
        <div className='header bg-[#ffffff] flex'>
           <div className='Logo flex p-8'>
             <img className='h-8 w-50 ' src={Logo} alt="" />
           </div>
          <div className='navbar'>
            <ul className='flex p-8 space-x-10 text-xl'>
              <li>TerraCotta</li>
              <li>Galley</li>
              <li>Included Pages</li>
              <li>About Us</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='icon-bar  ml-36'>
            <ul className='flex p-8 space-x-8 '>
              <li className='cursor-pointer'><CiSearch /></li>
              <li className='cursor-pointer'><GoPerson /></li> 
              <li className='cursor-pointer'><CiHeart /></li>
              <li className='cursor-pointer'><BsCart2/></li>

            </ul>
          </div>
        </div>
    </div>
    </>
  )
}

export default Header