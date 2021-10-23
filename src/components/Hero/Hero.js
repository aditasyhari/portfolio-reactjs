import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import scrollDown from '../../Assets/scroll-down.svg';
// import manSvg from '../../Assets/man-svg.svg';
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  // Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";

import { AvatarModel } from './AvatarModel';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Adit Asyhari</h1>
            <h5>Junior Developer</h5>
            <p>
              Web | Mobile | AI
            </p>
          </HeroLeft>
          <HeroRight>
            <div style={{minHeight: 300}}></div>
            <AvatarModel />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src={scrollDown}
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
