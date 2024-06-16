import React from 'react';
import { MdWorkHistory } from "react-icons/md";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const leftInVariants = {
    hidden: {
    y: 200,
    opacity: 0
    },
    visible: {
    y: 0,
    opacity: 1,
    transition: {
        type: "spring",
        stiffness: 25
    }
    }
};

function Experience() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
    });

    React.useEffect(() => {
    if (inView) {
    controls.start('visible');
    }
    }, [controls, inView]);
    return (
    <section className="experience">
        <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={leftInVariants}
        >
        <h2><MdWorkHistory /> Professional Experience</h2>

        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <b>COOP-Bioinformatic Programmer</b>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>Agriculture & Agri-Food Canada, Remote (Sep 2022 - Apr 2023)</p>
                <ul>
                <li>Comprehensive documentation of software tools and workflows.</li>
                <li>Generating dot plots using Gnuplot software and Mummer software in Linux.</li>
                <li>Genetic variant identification using C++, Java, and Python languages.</li>
                <li>Advanced Data Analysis through Sequence Comparison.</li>
                <li>Impact on public health through Bioinformatics.</li>
                </ul>
            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <b>COOP-Electrical Engineering Intern</b>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>SaskPower, Regina (Jan 2022 - Aug 2022)</p>
                <ul>
                <li>Preparing contract’s documents between SaskPower and the contractors.</li>
                <li>Contacting various vendors and purchasing the required equipment through emails.</li>
                <li>Preparing Excel sheets and PowerPoint presentations in Microsoft 365.</li>
                <li>Identifying the scope of work with the contractor while visiting the field.</li>
                <li>Uninstalling relays and switches and salvaging them in the proper containers.</li>
                </ul>
            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <b>Store Manager</b>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>YM Inc Urban Planet, Regina (Nov 2018 - Dec 2022)</p>
                <ul>
                <li>Managing schedules and making sure the store needs are covered.</li>
                <li>Making monthly sales targets.</li>
                <li>Analyzing the business based on the top sellers in the store and the company.</li>
                <li>Managing the wage cost for the store.</li>
                <li>Assisting customers and making sure they were satisfied before they left the store.</li>
                <li>Performing partnership with other banners.</li>
                </ul>
            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <b>Project Coordinator</b>
            </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <p>ZGEMI, Regina (Jan 2018 - May 2018)</p>
                <ul>
                <li>Supervising the laborers and making sure the tasks were getting completed.</li>
                <li>Measuring the area of the rooms and walls.</li>
                <li>Completing the final report for each room and reporting any uncompleted work.</li>
                <li>Recording and adding the employees hours and wage through Microsoft Office – Excel.</li>
                </ul>
            </div>
            </div>
        </div>

        </div>
        </motion.section>
    </section>
    );
}
export default Experience;
