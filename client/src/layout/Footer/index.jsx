import React from 'react'
import './footer.scss'
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
function Footer() {
  return (
    <footer>
      <div className="div">Copyright ©2024 All rights reserved | This template is made with  by PM Systems</div>
      <div className="iconBox">
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
    </footer>
  )
}

export default Footer