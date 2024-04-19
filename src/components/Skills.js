import React from 'react';
import { AiOutlineConsoleSql } from "react-icons/ai";
import { BiSolidFileCss } from "react-icons/bi";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa6";
import { SiCodio, SiCplusplus, SiMysql, SiPaloaltosoftware } from 'react-icons/si';
import { TiHtml5 } from "react-icons/ti";
import './Skills.css';



function Skills() {
  return (
    <section className="skills">
      <h2><SiPaloaltosoftware size={25}/> Skills</h2>
      <p style={{ textAlign: 'center' }}>
        <a style={{ color: 'black' }} href="https://www.w3schools.com/cpp/" target="_blank" rel="noopener noreferrer">
          <SiCplusplus size={30} />
        </a>
        <a style={{ color: 'black' }} href="https://www.w3schools.com/c/" target="_blank" rel="noopener noreferrer">
          <SiCodio size={30} /> 
        </a>
        <a style={{ color: 'black' }} href="https://www.w3schools.com/java/" target="_blank" rel="noopener noreferrer">
          <FaJava size={30} />
        </a>
        <a style={{ color: 'black' }} href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer">
          <FaPython size={30} />
        </a>
        <a style={{ color: 'black' }} href="https://www.w3schools.com/php/" target="_blank" rel="noopener noreferrer">
          <FaPhp  size={30} />
        </a>
        <a style={{ color: 'black' }} href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">
          <TiHtml5 size={30} />
        </a>
        <a style={{ color: 'black' }} href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
          <BiSolidFileCss size={30} /> 
        </a> 
        <a style={{ color: 'black' }} href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <FaReact size={30} />
        </a>
        <a style={{ color: 'black' }} href="https://www.w3schools.com/sql/" target="_blank" rel="noopener noreferrer">
          <AiOutlineConsoleSql size={30} /> 
        </a> 
        <a style={{ color: 'black' }} href="https://www.w3schools.com/mysql/" target="_blank" rel="noopener noreferrer">
          <SiMysql size={33} />
        </a>
      </p>

      <ul>
        <li><b>Programming Languages:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li>C++, C, Java, Python, ARM and MIPS Assembly</li>
          </ul>
        </li>
        <li><b>Web Development:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li>HTML, CSS, React, PHP, WordPress</li>
          </ul>
        </li>
        <li><b>Database Management:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li>SQL, MySQL</li>
          </ul>
        </li>
        <li><b>Software Development:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li> Agile Methodologies, GitHub</li>
          </ul>
        </li>
        <li><b>Hardware Design and Simulation:</b> VHDL</li>

        <li><b>Development Environments and IDEs:</b>
          <ul style={{ listStyleType: 'square' }}>
            <li> Visual Studio Code, Codeblocks, Replit, Vivado, Keil uVision</li>
          </ul>
        </li>
        <li><b>Design and Prototyping:</b> Figma</li>
        <li><b>Modeling programs:</b> Implement the best solution based on the needs by Solid Edge</li>
        
        <li><b>Management Skills:</b> Leveraging expertise in interpersonal communication, team leadership, and strategic business analysis</li>
      </ul>
    </section>
  );
}

export default Skills;
