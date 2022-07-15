import React from 'react';
import '../Assets/Footer.css';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_icons'>
            <FiInstagram className='instagram'/>
            <FaFacebookF className='facebook'/>
            <FaTwitter className='twitter'/>
            <FaYoutube className='youtube'/>
        </div>
        <div className='footer_rows'>
            <div className='footer_row_one'>
                <p className='footer_information'>Audio and Subtitles</p>
                <p className='footer_information'>Media Center</p>
                <p className='footer_information'>Privacy</p>
                <p className='footer_information'>Contact Us</p>
            </div>
            <div className='footer_row_two'>
                <p className='footer_information'>Audio Description</p>
                <p className='footer_information'>Investor Relations</p>
                <p className='footer_information'>Legal Notices</p>
            </div>
            <div className='footer_row_three'>
                <p className='footer_information'>Help Center</p>
                <p className='footer_information'>Jobs</p>
                <p className='footer_information'>Cookie Preferences</p>
                
            </div>
            <div className='footer_row_four'>
                <p className='footer_information'>Gift Cards</p>
                <p className='footer_information'>Terms of Use</p>
                <p className='footer_information'>Corporate Information</p>
            </div>
        </div>
    </div>
  )
}

export default Footer