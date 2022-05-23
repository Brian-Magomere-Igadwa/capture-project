import React from "react";
import home1 from "../img/home1.png";

import {
  StyledHide,
  StyledAbout,
  StyleDescription,
  StyledImage,
} from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fadeAnimation, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyleDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with great skills .
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </StyleDescription>
      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="Guy with a camera."
        />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
