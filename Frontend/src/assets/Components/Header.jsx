import React, { useContext, useEffect } from "react";
import Tab from "./Tab";
import { BsChatDotsFill } from "react-icons/bs";
import { Provider } from "../Context/MyContext";
import { BsGithub } from "react-icons/bs";
import { IoLogoBehance } from "react-icons/io5";
import { FaMedium } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaBezierCurve } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import Typewriter from "typewriter-effect/dist/core";

export default function Header() {
  const { contactFormVisible, setContactFormVisible } = useContext(Provider);

  useEffect(() => {
    let typeTxt = document.querySelector("#typewriterTxt");

    var typewriter = new Typewriter(typeTxt, {
      loop: true,
      delay: 75,
    });

    typewriter
      .pauseFor(2)
      .typeString(
        "Designing Products"
      )
      .pauseFor(1000)
      .deleteAll()
      .typeString("Building Solutions")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Design • Develop • Deliver")
      .pauseFor(1000)
      .deleteAll()
      .start();
  },[]);

  function displayContactForm() {
    setContactFormVisible(true);
  }

  return (
    <>
      <div className="header">
        <div className="HeaderContent">
          <div className="HeaderLeft">
            <div className="myPhoto">
              <img src='https://res.cloudinary.com/dnakv3uwo/image/upload/v1734691427/Mudit_l1u8ql.png' />
            </div>
            <div className="myContent">
              <h2>Mudit Mehta</h2>
              <p id="typewriterTxt"></p>
              <p className="socialIcons">
                <a href="https://www.linkedin.com/in/muditmehtaa/" target="_blank"><FaLinkedin size={20} /></a>
                <a href="https://github.com/muditm2004" target="_blank"><BsGithub size={20} /></a>
                <a href="https://www.behance.net/muditmehta" target="_blank"><IoLogoBehance size={20} /></a>
                <a href="https://medium.com/@mudit.mehtaa" target="_blank"><FaMedium size={20} /></a>
                
              </p>
            </div>
          </div>
          <div className="HeaderRight">
            <button onClick={displayContactForm}>
              <BsChatDotsFill />
              Get in Touch
            </button>
          </div>
        </div>
        <div className="navBar">
          {/* <NavLink to={"/"}> */}
        
          <Tab tabName="About Me" id="AboutMe" icon={<FaUserCircle id="About Me" color="white" size={20}/>}  />
          {/* </NavLink> */}
          {/* <NavLink to={"/devprojects"}> */}
          <Tab tabName="Developed" id="DevProjects" icon={<FaCode color="white" id="DevProjects" size={20}/>} />
          {/* </NavLink> */}
          {/* <NavLink to={"/designprojects"}> */}
          <Tab tabName="Designed" id="DesProjects" icon={<FaBezierCurve color="white" id="DesProjects" size={20}/>}/>
          {/* </NavLink> */}
          {/* <NavLink to={"/skills"}> */}
          <Tab tabName="Skills" id="Skills" icon={<FaTools color="white" id="Skills" size={20} />}/>
          {/* </NavLink> */}
        </div>
      </div>
    </>
  );
}
