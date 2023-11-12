import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
   <>
    <footer className=" w-100 bg-light  mt-5 mx-2 text-center" > 
    <div className="thirdcolumn">
    
        <div>
 <a href="https://instagram.com/abhishekburnwal03?igshid=Mmw0OGFsOHNhZGNw" target="_blank" className='footso'>
        <FaInstagram className='icons'/>  Abhishek Burnwal
        </a>
        </div>
        <div>
        <a href="tel:+919693322489" className='footso'>
    Call Us +919693322489 </a>
        </div>
        <div>
        <a href="https://wa.me/+919693322489 " target="_blank" className='footso'>
        <FaWhatsapp className='icons'/>  Abhishek Burnwal
        </a>
        </div>
      </div>
 
      <div className='my-2'>
    <p> ⚫ 2023 Bisal Kumar. All Rights Reserved | <span className="footerterms">@Terms And Conditions</span> </p>
    </div>
 
</footer>
   </>
  )
}

export default Footer;