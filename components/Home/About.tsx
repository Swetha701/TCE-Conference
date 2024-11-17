"use client";

import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section id="about" className="flex flex-col w-full md:flex-row">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[50%] px-5 md:px-20 py-5 text-justify space-y-2 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-2xl text-primary-accent"
        >
          About TCE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Thiagarajar College of Engineering was founded by philanthropist Late Sri. Karumuttu Thiagarajan Chettiar and has been providing world-class quality technical education with strong ethical values since 1987. As a government-aided autonomous institution, it is approved by AICTE, affiliated to Anna University, and has received accreditation from NAAC with an A++ grade and NBA. The college boasts a dedicated faculty of 230 members and a vibrant student body of 4,400. It has achieved notable accolades, including a 4th rank in ARIIA and the CII Best Innovation Award in 2021. In the World University Rankings 2024, the institution is placed within the 1201-1500 rank band and holds a 101-150 band in NIRF rankings
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The UG and PG programmes of TCE are accredited by the National Board
          of Accreditation. TCE is ranked 85th among the top 200 engineering
          institutions in India in the National Institutional Ranking Framework
          published by MHRD, Govt. of India in 2022.
        </motion.p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col w-full md:w-[50%] px-5 md:px-20 py-5 text-justify space-y-2 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-2xl text-primary-accent"
        >
          About The Conclave
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Research Conclave 2025, themed &quot;Advancing towards a Resilient
          Future,&quot; convenes visionary leaders, innovators, and scholars to
          explore transformative solutions for sustainable development. This
          premier gathering facilitates cross-sectoral dialogue, knowledge
          sharing, and collaboration to address environmental, social, and
          economic challenges. Through keynote addresses, panel discussions and
          research presentations, participants will delve into cutting-edge
          themes. Join us in shaping a sustainable tomorrow.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
