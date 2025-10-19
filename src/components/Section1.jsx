import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Section1.css';

const Section1 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  return (
    <div className="section1" ref={sectionRef}>
      <div className="section1-left">
        <img
          src="/images/machine.png"
          alt="Card Machine"
          className="machine-image"
        />

        <motion.img
          src="/images/card.png"
          alt="Card"
          className="card-image"
          initial={{ y: -500, opacity: 0, rotate: 66 }}
          animate={isInView ? { y: 0, opacity: 1, rotate: 66 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <motion.p
          className="pay"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
        >
          Payment Successful
        </motion.p>
      </div>

      <div className="section1-right">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Seamless Payments
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Experience secure and effortless transactions with our modern card 
          machine designed for your lifestyle. Accept payments instantly, 
          reduce waiting time, and ensure every transaction is safe with advanced 
          encryption technology. Its sleek design blends innovation with convenience, 
          making it the perfect companion for both businesses and individuals. 
          Step into a smarter, faster, and more reliable way of handling your payments.
        </motion.p>

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          Start Now
        </motion.button>
      </div>
    </div>
  );
};

export default Section1;
