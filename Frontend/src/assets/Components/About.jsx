import React, { useContext } from "react";
import { Provider } from "../Context/MyContext";

export default function About() {
  const { experience, education } = useContext(Provider);

  return (
    <>
      <div className="aboutContainer">
        <h1>About</h1>
        <p>
          With the love of blending UX, Tech, and Business acumen to craft
          impactful digital experiences, and a passion for problem-solving, user
          focused design solutions and strategic thinking, I aim to bridge the
          the gap between ideas and execution.
        </p>
        <p>
          With a solid foundation in Web Development, Python & UX Design, I
          thrive on exploring new ways to elevate user interaction and
          streamline business essentials.
        </p>
        <p>Let's connect and build something meaningful!!</p>
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
