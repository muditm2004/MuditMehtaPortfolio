import React, { useContext, useEffect, useState } from "react";
import { Provider } from "../Context/MyContext";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import moment from "moment";
import Tag from "./Tag";

export default function About() {
  const { experience, education } = useContext(Provider);

  function calcDuration(startDate, endDate) {
    // Parse the input in "MMMM YYYY" format (e.g., "January 2020")
    const start = moment(startDate, "MMMM YYYY");
    const end = moment(endDate, "MMMM YYYY");
  
    if (!start.isValid() || !end.isValid()) {
      return "Invalid date format";
    }
  
    const years = end.diff(start, "years");
    start.add(years, "years");
  
    const months = end.diff(start, "months");
  
    // Construct the output string
    const durationParts = [];
    if (years > 0) durationParts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months > 0) durationParts.push(`${months} month${months > 1 ? "s" : ""}`);
  
    return durationParts.join(" ") || "0 months"; // Fallback for same month
  }

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
                    <h6>{ calcDuration(exp.StartDate,exp.EndDate)}</h6>
                    <ul>
                      {exp.Desc.map((para, idx) => {
                        return (
                          <>
                            <li key={idx}>{para}</li>
                          </>
                        );
                      })}
                    </ul>
                    {/* <p>{exp.Desc}</p> */}
                    <div className="tagContainer">
                      {
                        exp.Skills.map((skill,idx)=>{
                          return(
                            <Tag tagName={skill.Name} color={skill.Color}/>
                          )
                        })
                      }
                    </div>
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
          {education.map((element, eduIdx) => {
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
                    <ul>
                      {element.Desc.map((para, idx) => {
                        return (
                          <>
                            <li key={idx}>{para}</li>
                          </>
                        );
                      })}
                    </ul>
                    <div >
                      
                      <div className="eduGallery" id={`Gallery${eduIdx}`}>
                        <PhotoProvider  
                          speed={() => 800}
                          easing={(type) =>
                            type === 1
                              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                          }
                          toolbarRender={({ onScale, scale }) => {
                            return (
                              <>
                                <FiZoomIn
                                  size={20}
                                  className="PhotoView-Slider__toolbarIcon"
                                  style={{
                                    fill: "none",
                                    padding: "0px",
                                    marginRight: "10px",
                                  }}
                                  onClick={() => onScale(scale + 1)}
                                />
                                <FiZoomOut
                                size={20}
                                  className="PhotoView-Slider__toolbarIcon"
                                  style={{
                                    fill: "none",
                                    padding: "0px",
                                    marginRight: "10px",
                                  }}
                                  onClick={() => onScale(scale - 1)}
                                />
                              </>
                            );
                          }}
                          overlayRender={({ index, images }) => {
                            const currentImage = images[index];
                            console.log('C:',currentImage);
                            
                            return (
                              <div
                                style={{
                                  position: "absolute",
                                  bottom: "20px",
                                  left: "20px",
                                  color: "white",
                                  background: "rgba(0, 0, 0, 0.5)",
                                  padding: "10px",
                                  borderRadius: "5px",
                                  zIndex:'99'
                                }}
                              >
                                <p>
                                  {currentImage?.overlay || "No Title Available"}
                                </p>
                              </div>
                            );
                          }}
                        >
                          {element.Images.map((img, idx) => {
                            console.log(img.Title);
                            return (
                              <div className="GalleryImg">
                                <PhotoView src={img.url} overlay={img.Title}>
                                  <img
                                    src={img.url}
                                    alt={img.Title}
                                    className="eduImage"
                                    style={{
                                      cursor: "pointer",
                                      // maxWidth: "100px",
                                    }}
                                  />
                                </PhotoView>
                              </div>
                            );
                          })}
                        </PhotoProvider>
                      </div>
                      
                    </div>
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
