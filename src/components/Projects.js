import React from 'react';

import './Projects.css';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { FaProjectDiagram } from "react-icons/fa";


export default function Projects() {

  return (
    <section className='projects'>
      <h2><FaProjectDiagram size={28}/> Projects</h2>
      <br></br>
      <Tabs>
        <TabList className='tabList'>
          <Tab _hover={{bg: "white"}}
            _selected={{ bg: "gray", color: "black", borderRadius: "20px"}}>
            <b>Simon Game</b></Tab>
            <Tab _hover={{bg: "white"}}
            _selected={{ bg: "gray", color: "black", borderRadius: "20px"}}>
            <b>Classes Schedule</b></Tab>
            <Tab _hover={{bg: "white"}}
            _selected={{ bg: "gray", color: "black", borderRadius: "20px"}}>
            <b>SKDCA Website</b>
          </Tab>
        </TabList>
        <TabList className='tabList'>
          <Tab _hover={{bg: "white"}}
            _selected={{ bg: "gray", color: "black", borderRadius: "20px"}}>
            <b>Drowsiness Detection</b></Tab>
            <Tab _hover={{bg: "white"}}
            _selected={{ bg: "gray", color: "black", borderRadius: "20px"}}>
            <b>Parking System</b>
          </Tab>
        </TabList>
        

        <TabPanels className='projectDetails'>
          <TabPanel>
            <p className="firstP">Embedded Systems and Interactive Game Design (ENSE352 class)</p>
            <ul>
              <li>Engineered a Simon Game using C on Keil uVision, incorporating an STM32F103 Nucleo Board for hardware interfacing.</li>
              <li>Designed game logic to run 10 levels of increasing difficulty, with visual feedback provided through a system of 4 LEDs and a separate fail indicator LED.
              Implemented input handling via push buttons with debounced inputs for accurate player interaction.</li>
              <li>Utilized classic "Cylon Eye Scanner" as a dynamic start sequence and an innovative binary display to indicate level progression or failure.</li>
              <li>Applied time constraints to user inputs for enhanced gameplay challenge and utilized an isolated resistor for LED current regulation.</li>
            </ul>
            <p className="secondP">To view full details: <a href="https://github.com/ferasaljoudi/SimonGame" target="_blank" rel="noopener noreferrer">SimonGame</a></p> 
          </TabPanel>

          <TabPanel>
          <p className="firstP">FPGA-Based Digital Scheduling and Display System (ENEL384 class)</p>
          <ul>
            <li>Conceptualized and developed a synchronous digital circuit for class scheduling on a BASYS-3 FPGA board.</li>
            <li>Programmed using VHDL in Vivado to control display logic, including class, lab, seminar, midterm, 
              and final schedules with user-interactive buttons and switches.</li>
            <li>Engineered a multiplexing solution to display text and numbers across four 7-segment displays, 
              achieving seamless visual output through rapid switching (0.0025 seconds interval).</li>
            <li>Implemented LED indicators for class selection and a weekly schedule display, enhancing user 
              experience and interface intuitiveness.</li>
            <li>Demonstrated proficiency in digital system design and the practical application of 
              hardware description languages and FPGA programming.</li>
          </ul>
          <p className="secondP">To view full details: <a href="https://github.com/ferasaljoudi/ClassesSchedule" target="_blank" rel="noopener noreferrer">ClassesSchedule</a></p> 
          </TabPanel>

          <TabPanel>
            <p className="firstP">Collaborative Web Development for Professional Growth</p>
            <p className="firstP">Team Project for Saskatchewan Career Development Association (SKCDA)</p>
            <ul>
            <li>Collaborated with a team to design and launch a WordPress-based website aimed at supporting 
              Career Development Practitioners across Saskatchewan.</li>
            <li>Engaged in the full project lifecycle from conceptualization to deployment, ensuring the site provides 
              resources, advocacy, and networking opportunities for professional development.</li>
            <li>Integrated features for member engagement, including forums, event calendars, and professional 
              development modules, leveraging WordPress’s versatile platform.</li>
            <li>Coordinated with cross-functional teams to gather requirements, align objectives, and deliver
               a user-centric experience that aligns with SKDCA’s mission and values.</li>
            <li>Contributed to the creation of a content strategy that addresses the needs of diverse stakeholders 
              within the career development field, enhancing the association's digital presence.</li>
          </ul>
          <p className="secondP">To view full details: <a href="https://github.com/ferasaljoudi/SKCDA---Webpage---Design" target="_blank" rel="noopener noreferrer">SKCDA Project</a></p>
          </TabPanel>

          <TabPanel>
            <p className="firstP">Machine Learning and Image Processing (ENSE412 class)</p>
            <ul>
            <li>Developed a Driver Drowsiness Detection model using Python and TensorFlow, 
              utilizing a Convolutional Neural Network (CNN) with a pre-trained VGG16 model.</li>
            <li>Employed image preprocessing techniques to resize and normalize facial images 
              sourced from a Kaggle dataset.</li>
            <li>Explored other multiple machine learning algorithms, including 
              Random Forest, K-Nearest Neighbors (KNN), and Decision Trees.</li>
            <li>Integrated the CNN model into a Flask-based web application to demonstrate real-time 
              image analysis and prediction capabilities.</li>
            <li>Achieved high prediction accuracy, validating the model with both test images and external datasets.</li>
            <li>Documented the project development process, model training, and performance analysis in a detailed Jupyter notebook.</li>
          </ul>
          <p className="secondP">To view full details: <a href="https://github.com/ferasaljoudi/DriverDrowsinessDetection" target="_blank" rel="noopener noreferrer">Driver Drowsiness Detection</a></p>
          </TabPanel>

          <TabPanel>
            <p className="firstP">STM32-Based Smart Parking Management System (ENEL351 class)</p>
            <ul>
            <li>Engineered a smart parking solution using the STM32F103RB microcontroller to 
              optimize parking space usage and enhance vehicle safety within limited-space environments.</li>
            <li>Implemented a user interface with an LCD display to provide real-time parking availability, 
              the rate based on vehicle weight, and fire alarm alerts.</li>
            <li>Incorporated various sensors including pressure, infrared (IR), and gas sensors to manage 
              parking operations and ensure safety.</li>
            <li>Developed mechanisms for automated entrance and exit gate operation using servo motors controlled via pressure and IR sensors.</li>
            <li>Designed and implemented a fire alarm system using a gas sensor and buzzer to enhance emergency responsiveness.</li>
            <li>Programmed the entire system in C, focusing on modular design for easy maintenance and scalability.</li>
          </ul>
          <p className="secondP">To view full details: <a href="https://github.com/ferasaljoudi/AljoudiParkingSystem" target="_blank" rel="noopener noreferrer">Aljoudi Parking System</a></p>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </section>
  );
}
