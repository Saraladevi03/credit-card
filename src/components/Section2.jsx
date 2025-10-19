import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Section2.css';

const Section2 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  return (
    <div className="section2" ref={sectionRef}>
   
      <motion.img
        src="./images/card.png"
        alt="Card"
        className="section2-card"
        initial={{ x: -700, opacity: 0, rotate: -295 }}
        animate={isInView ? { x: 0, opacity: 1, rotate: -295 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      />

  
      <motion.img
        src="./images/wallet1.png"
        alt="Wallet 1"
        className="wallet1"
        initial={{ y: -500, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      <motion.img
        src="./images/wallet2.png"
        alt="Wallet 2"
        className="wallet2"
        initial={{ y: -600, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Text Content */}
      <motion.div
        className="section2-text"
        initial={{ x: -200, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{duration:1, ease:'easeOut' ,delay:1.5}}
      >
        <h3>Smart & Secure Payments</h3>
      <p>
  Experience the future of transactions with our advanced digital wallet. 
  Keep your cards safe, payments smooth, and your shopping experience 
  effortless. Security and convenience now go hand in hand. 
  From quick tap payments to secure online checkouts, everything is 
  designed to fit right in your pocket.  
  Manage multiple cards with ease, track your spending in real time, 
  and enjoy the freedom of going cashless wherever you are.  
  With cutting-edge encryption and seamless integration, our wallet is 
  more than just storage—it's the smarter way to pay.  
</p>

        <button className="cta-btn">Get Started</button>
      </motion.div>
    </div>
  );
};

export default Section2;
