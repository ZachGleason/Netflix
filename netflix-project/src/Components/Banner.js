import React from 'react';
import '../Assets/Banner.css'
import {BsPlayFill, BsInfoCircle } from 'react-icons/bs';


const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner_row'>
            <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png'
            alt='icon'
            className='netflix_icon' 
            />
            <h3>SERIES</h3>
        </div>
        <div className='banner_row_two'>
            <p className='banner_text'>RESIDENT</p>
            <p className='banner_text' id='evil'>EVIL</p>
        </div>
        <div className='banner_row_three'>
            <p className='banner_content'>In this tense post-apocalyptic series, a survivor of a viral outbreak</p>
            <p className='banner_content'>searches for a cure while battling a evil corporation</p>
        </div>
        <div className='banner_buttons'>
            <button className='button_one'><BsPlayFill className='play'/><p className='play_content'>Play</p></button>
            <button className='button_two'><BsInfoCircle className='info'/><p className='info_content'>More Info</p></button>
        </div>
    </div>
  )
}

export default Banner