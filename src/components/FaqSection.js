import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any questions <span>FAQ</span>
        <AnimateSharedLayout>
          <Toggle title="How Do I Start?">
            {/* <h4>How Do I Start?</h4> */}
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident, deleniti!
              </p>
            </div>
          </Toggle>
          <Toggle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident, deleniti!
              </p>
            </div>
          </Toggle>
          <Toggle title="Different Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident, deleniti!
              </p>
            </div>
          </Toggle>
          <Toggle title="What Products Do You Offer?">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Provident, deleniti!
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </h2>
    </StyledFaq>
  );
};
const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
