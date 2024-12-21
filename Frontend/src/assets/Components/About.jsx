import React, { useContext } from "react";
import { Provider } from "../Context/MyContext";

export default function About() {
  const { experience, education } = useContext(Provider);

  return (
    <>
      <div className="aboutContainer">
        <h1>About</h1>
        <p>
          I love blending design, technology, and business strategy to craft impactful
          digital experiences. With a passion for problem-solving, user-focused
          design, and strategic thinking, I aim to bridge the gap between ideas
          and execution. Let’s connect and build something meaningful!
        </p>
        <p>
          With a solid foundation in web development and Python, I thrive on
          exploring new ways to elevate user interaction and streamline business
          essentials.
        </p>
        <p>
          Let’s connect and see how we can shape the digital future together!
        </p>
      </div>

      <div className="aboutContainer">
        <h1>Experience</h1>
        <div className="contentContainer">
          {experience.map((exp) => {
            return (
              <>
                <div className="Content">
                  <div className="ContentLeft">
                    <div className="currentPlaceBlur"></div>
                    <img src={exp.Logo} className="ProgressLogo" />
                    <div className="Progress"></div>
                  </div>
                  <div className="ContentRight">
                    <h3>{exp.Role}</h3>
                    <h5>{exp.Organization}</h5>
                    <h6>{exp.Duration}</h6>
                    <p>{exp.Desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="aboutContainer">
        <h1>Education</h1>
        <div className="contentContainer">
          {education.map((element) => {
            return (
              <>
                <div className="Content">
                  <div className="ContentLeft">
                    <div className="currentPlaceBlur"></div>
                    <img src={element.Logo} className="ProgressLogo" />
                    <div className="Progress"></div>
                  </div>
                  <div className="ContentRight">
                    <h3>{element.Study}</h3>
                    <h5>{element.Institute}</h5>
                    <h6>{element.Duration}</h6>
                    <p>{element.Desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="endSpace"></div>
    </>
  );
}
