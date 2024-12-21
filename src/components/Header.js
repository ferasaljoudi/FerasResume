import React from 'react';
import { AiOutlineGithub } from "react-icons/ai";
// import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import profilePic from '../assets/FerasAljoudi.jpg';
import './Header.css';
import headerCover from '../assets/headerCover.jpg';

function Header() {
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
                    {/* <p><BsFillTelephoneForwardFill id='BsFillTelephoneForwardFill'/> : (306)###-####</p> */}
                    <p><FaHome id='FaHome'/> : Regina, Sk. Canada</p>
                    {/* <hr></hr> */}
                    <p><AiOutlineGithub id='AiOutlineGithub'/>
                        <a href="https://github.com/ferasaljoudi" target="_blank" rel="noopener noreferrer" title="My GitHub" style={{ marginRight: '15px' }}>GitHub</a>
                        <FaLinkedin id='FaLinkedin' />
                        <a href="https://ca.linkedin.com/in/feras-aljoudi-539727242" target="_blank" rel="noopener noreferrer" title="My LinkedIn">LinkedIn</a>
                    </p>
                    </div>
                </div>
                <p id='me'>Please note that this is an outdated version of my resume. For my most recent resume, 
                    kindly visit <strong><a href="https://resume.aljoudi.ca/" target="_blank" rel="noopener noreferrer" title="My Resume">https://resume.aljoudi.ca</a></strong>. 
                    For more information about me, please explore my portfolio 
                    at <strong><a href="https://aljoudi.ca/" target="_blank" rel="noopener noreferrer" title="My Portfolio">https://aljoudi.ca</a></strong>.</p>

            </header>
        </div>
    );
}

export default Header;
