import React from "react";
import { stackList } from "../../data/ProjectData";
// import manSvg from '../../Assets/man-svg.svg';
import { AvatarModel } from './AvatarModel'
import {
  // Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <AvatarModel />
          <div className="AboutBio">
            Hello! My name is <strong>Aditya Roman Asyhari</strong> and I enjoy
            creating things that live on the internet. I am a Full-stack Developer
            located in Indonesia. I love web, mobile, ai, and creating an
            intuitive and dynamic user experience.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
