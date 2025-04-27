import React, { useContext, useEffect, useState, useRef } from "react";
import { Provider } from "../Context/MyContext";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaCircleChevronRight } from "react-icons/fa6";
import { FiZoomIn, FiZoomOut } from "react-icons/fi";
import { PhotoProvider, PhotoView } from "react-photo-view";
import moment from "moment";
import Tag from "./Tag";

export default function About() {
  const { experience, education, featured  } = useContext(Provider);
  let present=false
  function calcDuration(startDate, endDate) {
    let start;
    let end;
    let today = new Date();
    let monthName = today.toLocaleString('default', { month: 'short' }); // changed 'long' to 'short'
    let year = today.getFullYear();

    // Parse the input in "MMMM YYYY" format (e.g., "January 2020")
    start = moment(startDate, "MMMM YYYY");
    console.log(endDate);
    if (String(endDate).toLowerCase() === "present") {
        present = true;
        return `${calcDuration(startDate, monthName + " " + year)}`;
    } else {
        end = moment(endDate, "MMMM YYYY");
    }

    if (!start.isValid() || !end.isValid()) {
        return "Invalid date format";
    }

    let years = end.diff(start, "years");
    start.add(years, "years");

    let months = end.diff(start, "months");
    months = months + 1; 

    if (months==12) {
        months=0;
        years+=1;
    }
    // Construct the output string
    const durationParts = [];
    if (years > 0) durationParts.push(`${years} year${years > 1 ? "s" : ""}`);
    if (months > 0) durationParts.push(`${months} month${months > 1 ? "s" : ""}`);
  
    

    // Reformat startDate and endDate to short month format
    const formattedStart = moment(startDate, "MMMM YYYY").format("MMM YYYY");
    const formattedEnd = moment(endDate, "MMMM YYYY").format("MMM YYYY");

    if (present) {
        present = false;
        return `${formattedStart} - Present (${durationParts.join(", ")})` || `${durationParts.join(" ")}` || "0 months";
    } else {
        return `${formattedStart} - ${formattedEnd} (${durationParts.join(", ")})` || `${durationParts.join(" ")}` || "0 months";
    }
}


  const galleryRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    galleryRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    galleryRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  // const images = [
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699228/18a18901-25a5-48f0-8a7f-e049ecb41f3e.png",
  //     description: "Recommendation Letter by Atal Incubation Centre",
  //     link: "https://example.com/project1", // External link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: '', // No external link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: null, // No external link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: null, // No external link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: null, // No external link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: null, // No external link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: null, // No external link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: null, // No external link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: null, // No external link
  //   },
  //   {
  //     src: "https://res.cloudinary.com/dnakv3uwo/image/upload/v1736699033/Free_Jewelry_Box_Mockup_nhp0af.png",
  //     description: "Project 2: Another amazing concept.",
  //     link: null, // No external link
  //   },
  // ];

  return (
    <>
      <div className="aboutContainer">
        <h1>Featured</h1>
        <div className="galleryWrapper">
          <button className="arrow leftArrow" onClick={scrollLeft}>
            &#8592;
          </button>
          <div className="galleryContainer" ref={galleryRef}>
            <PhotoProvider>
              <div className="gallery">
                {featured.map((image, index) => (
                  <div className="imageCard" key={index}>
                    {image.Link ? (
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={image.srcImg}
                          alt={`Project ${index + 1}`}
                          className="cardImage"
                        />
                      </a>
                    ) : (
                      <PhotoView src={image.srcImg}>
                        <img
                          src={image.srcImg}
                          alt={`Project ${index + 1}`}
                          className="cardImage"
                        />
                      </PhotoView>
                    )}
                    <p className="cardText">{image.Desc}</p>
                  </div>
                ))}
              </div>
            </PhotoProvider>
          </div>
          <button className="arrow rightArrow" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>

      <div className="aboutContainer">
        <h1>About</h1>
        <p>
          Aspiring Product Manager with a background in web development,
          embedded systems, and UX design. Passionate about creating
          user-centric products that balance business goals and technology.
          Currently exploring how product thinking can shape great digital
          experiences.
        </p>
        <p>
          With a solid foundation in Web Development, Python & UX Design, I
          thrive on exploring new ways to elevate user interaction and
          streamline business essentials. Let's connect and build something
          meaningful!!
        </p>
        {/* <p>Let's connect and build something meaningful!!</p> */}
      </div>

      <div className="aboutContainer">
        <h1>Experience</h1>
        <div className="contentContainer">
          {experience.map((exp) => {
            return (
              <>
                <div className="Content">
                  <div className="ContentLeft">
                    <div
                      className="currentPlaceBlur"
                      style={
                        exp.EndDate.toLowerCase() === "present"
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    ></div>
                    <img src={exp.Logo} className="ProgressLogo" />
                    <div className="Progress"></div>
                  </div>
                  <div className="ContentRight">
                    <h3>{exp.Role}</h3>
                    <h5>{exp.Organization}</h5>
                    <h6>{calcDuration(exp.StartDate, exp.EndDate)}</h6>
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

                    <div className="eduGallery" id={`Gallery${exp}`}>
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
                            console.log("C:", currentImage);

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
                                  zIndex: "99",
                                }}
                              >
                                <p>
                                  {currentImage?.overlay ||
                                    "No Title Available"}
                                </p>
                              </div>
                            );
                          }}
                        >
                          {exp.Images.map((img, idx) => {
                            console.log(img.Title);
                            return (
                              <div className="GalleryImg" style={{marginBottom:"15px",marginTop:"10px"}}>
                                <PhotoView src={img.src} overlay={img.Title}>
                                  <img
                                    src={img.src}
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


                    <div className="tagContainer" id="expTag">
                      {exp.Skills.map((skill, idx) => {
                        return <Tag tagName={skill.Name} color={skill.Color} />;
                      })}
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
                    {/* <div className="currentPlaceBlur"></div> */}
                    <img src={element.Logo} className="ProgressLogo" />
                    <div className="Progress"></div>
                  </div>
                  <div className="ContentRight">
                    <h3>{element.Study}</h3>
                    <h5>{element.Institute}</h5>
                    <h6>{element.Duration} </h6>
                    <ul>
                      {element.Desc.map((para, idx) => {
                        return (
                          <>
                            <li key={idx}>{para}</li>
                          </>
                        );
                      })}
                    </ul>
                    <div>
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
                            console.log("C:", currentImage);

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
                                  zIndex: "99",
                                }}
                              >
                                <p>
                                  {currentImage?.overlay ||
                                    "No Title Available"}
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
