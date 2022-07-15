import React from 'react';
import '../Assets/Header.css';
import { BsSearch, BsBellFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { IoMdArrowDropdown } from 'react-icons/io';




const Header = () => {
  return (
    <div className='header'>
        <img 
        src='https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg'
        alt='header_icon'
        className='header_icon'
        />
        <div className='header_content'>
            <p>Home</p>
            <p>TV Shows</p>
            <p>Movies</p>
            <p>News & Popular</p>
            <p>My List</p>
        </div>
        <div className='header_right'>
            <BsSearch className='header_search'/>
            <p>Kids</p>
            <BsBellFill className='header_bell'/>
            <div className='header_align'>
                <CgProfile className='header_profile'/>
                <IoMdArrowDropdown className='header_dropdown'/>
            </div>
        </div>
    </div>
  )
}

export default Header