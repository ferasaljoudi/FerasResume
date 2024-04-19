import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import profilePic from './FerasAljoudi.jpg';
import './Header.css';
import headerCover from './headerCover.jpg';

function Header() {
  const counterCode = `<div class="visitor-counter">
        <script language="javascript" src="http://hitcounters.net/counter.php?id=11536&cmd=cookie"></script>
        <span id="visitorCountImage">
          <img src="http://hitcounters.net/counter.php?id=11536&cmd=img_only" alt="VisitorsCounts" border="0" >
        </span>
        <span id="visitorCountText">Visitors</span>
        </div>`;

  return (
    <div>
      <img src = {headerCover} alt = "Header Cover" className="scroll-image" />
      <header>
        <div className="header">
          <div className = "header-section left">
            <img src = {profilePic} alt = "Feras Aljoudi" className = "profile-pic" />
            <b><h1 id='myName'>Feras Aljoudi</h1></b>
          </div>
          
          <div className="header-section right">
            <h1 id='contact'>Contact</h1>

            <p><MdEmail id='MdEmail'/> : feras.aljoudi@gmail.com</p>
            <p><BsFillTelephoneForwardFill id='BsFillTelephoneForwardFill'/> : (306)209-1033</p>
            <p><FaHome id='FaHome'/> : Regina, Sk. Canada</p>
            {/* <hr></hr> */}
            <p><AiOutlineGithub id='AiOutlineGithub'/>
              <a href="https://github.com/ferasaljoudi" target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>GitHub</a>
              <FaLinkedin id='FaLinkedin' />

              <a href="https://ca.linkedin.com/in/feras-al-joudi-539727242" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              
            </p>
            <section dangerouslySetInnerHTML={{ __html: counterCode }} />
          </div>
        </div>
        <p id='me'>Currently pursuing a Bachelor of Applied Science in Software Systems Engineering
        at the University of Regina, with an expected graduation date in April 2025.</p>
      </header>
    
    </div>
  );
}

export default Header;
