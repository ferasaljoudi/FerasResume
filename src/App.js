import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import './App.css';

const variants = {
  hidden: { opacity: 0, y: 100 }, // Start from the left and make it invisible
  visible: { opacity: 1, y: 0 }    // Move to its original position and make it visible
};

function App() {
  // useScroll hook to get scroll progress
  const { scrollYProgress } = useScroll();

  return (
    <div >
      <motion.div style={{
        scaleX: scrollYProgress, backgroundColor: 'blue', height: '12px', originX: 0,
        width: '100%', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1
      }} />
      <Header />
      
      <div id='body'>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          
          <section className="top-section">
            <Skills />
            <Projects />
          </section>
          <Experience />
        </motion.section>
      </div>
    </div>
  );
}

export default App;