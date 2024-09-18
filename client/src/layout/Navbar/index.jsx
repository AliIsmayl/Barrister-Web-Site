import React, { useState } from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false)

  function handleOpennavbar() {
    setOpenNavbar(!openNavbar)
  }
  // const getElementPosition = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     return element.offsetTop;
  //   }
  //   return 0;
  // };

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     });
  //   }
  // };




  return (
    <nav>
      <div className="navbarLeftBox">
        <div className="iconBox">
          <img src="https://png.pngtree.com/png-vector/20220816/ourmid/pngtree-law-firm-logo-and-icon-design-template-vector-silhouette-judge-abstract-vector-png-image_38449268.png" alt="" />
        </div>
        <div className="textBox">
          <ul>
            <ScrollLink to="Home" smooth={true} duration={500} offset={-50}>
              <li>
                Home
              </li>
            </ScrollLink>
            <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
              <li>
                About
              </li>
            </ScrollLink>
            <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
              <li>
                Service
              </li>
            </ScrollLink>
            <ScrollLink to="News" smooth={true} duration={500} offset={-50}>
              <li>
                News
              </li>
            </ScrollLink>
            <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
              <li>
                Contact
              </li>
            </ScrollLink>
          </ul>


        </div>
        <div className="menuBox" onClick={handleOpennavbar}>
          <IoMenu />
        </div>
      </div>
      <div className="navbarRightBox">
        <FaPhoneVolume style={{ fontSize: '40px' }} />
        <h1>+994 50 593 18 38</h1>
      </div>
      <div className={`respNavbar ${openNavbar ? 'openNavbar' : ""}`}>
        <ul>
          <ScrollLink to="Home" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>
              Home
            </li>
          </ScrollLink>
          <ScrollLink to="About" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>
              About
            </li>
          </ScrollLink>
          <ScrollLink to="Service" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>
              Service
            </li>
          </ScrollLink>
          <ScrollLink to="News" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>
              News
            </li>
          </ScrollLink>
          <ScrollLink to="Contact" smooth={true} duration={500} offset={-50}>
            <li onClick={handleOpennavbar}>
              Contact
            </li>
          </ScrollLink>
        </ul>
        <div className='iconsBox'>
          <div className="closeBtn" onClick={handleOpennavbar}>
            <IoMdClose />
          </div>
          <p>
            <FaPinterest />
          </p>
          <p>
            <FaLinkedinIn />
          </p>
          <p>
            <IoLogoInstagram />
          </p>
          <p>
            <FaFacebookF />
          </p>
          <p>
            <FaTwitter />
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar