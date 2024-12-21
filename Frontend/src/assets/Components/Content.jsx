import React, { useContext, useEffect, useRef } from "react";
import About from "./About";
import { Provider } from "../Context/MyContext";
import DevelopmentProjects from "./DevelopmentProjects";
import DesignProjects from "./DesignProjects";
import Skills from "./Skills";
import Header from "./Header";
import ContactForm from "./ContactForm";

export default function Content(props) {
  const {
    currentTab,
    setCurrentTab,
    contactFormVisible,
    setContactFormVisible,
  } = useContext(Provider);
  const formRef = useRef();

  function handleOutsideClick(e) {
    if (formRef.current && !formRef.current.contains(e.target)){
      setContactFormVisible(false);
    }
  }




  useEffect(() => {
    if (contactFormVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [contactFormVisible]);

  return (
    <>
      <ContactForm reference={formRef} />
      <Header />
      {props.page === "home" && <About />}
      {props.page === "devprojects" && <DevelopmentProjects />}
      {props.page === "desprojects" && <DesignProjects />}
      {props.page === "skills" && <Skills />}

      {/* {currentTab === 'AboutMe' && <About/>}
        {currentTab === 'DevProjects' && <DevelopmentProjects/>}
        {currentTab === 'DesProjects' && <DesignProjects/>}
        {currentTab === 'Skills' && <Skills/>} */}
    </>
  );
}
