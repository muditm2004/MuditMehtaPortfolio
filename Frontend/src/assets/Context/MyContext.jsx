import React, { useContext, useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";

export const Provider = createContext();

export default function MyContext({ children }) {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(() => {
    if (location.pathname === "/") {
      return "AboutMe";
    } else {
      return location.pathname.split("/")[1];
    }
  });
  const [currentProject, setCurrentProject] = useState("");
  const [contactFormVisible, setContactFormVisible] = useState(false);

  const [projects, setProjects] = useState([]);
  const [DevProjects, setDevProjects] = useState([]);
  const [DesProjects, setDesProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [featured, setFeatured] = useState([]);


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/getProjects`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });

    fetch(`${import.meta.env.VITE_API_URL}/getSkills`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSkills(data);
      });

    fetch(`${import.meta.env.VITE_API_URL}/getExperience`)
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        console.log(data);
        setExperience(data);
      });

    fetch(`${import.meta.env.VITE_API_URL}/getEducation`)
      .then((res) => res.json())
      .then((data) => {
        data.reverse();
        console.log("Education:", data);
        setEducation(data);
      });

      fetch(`${import.meta.env.VITE_API_URL}/getFeatured`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Featured:", data);
        setFeatured(data);
      });

  }, []);

  useEffect(() => {
    const devProjects = [];
    const desProjects = [];

    projects.forEach((element) => {
      if (element.Type === "Dev") {
        devProjects.push(element);
      } else {
        desProjects.push(element);
      }
    });

    setDevProjects(devProjects);
    setDesProjects(desProjects);
  }, [projects]);

  useEffect(() => {
    const form = document.querySelector(".contactFormContainer");
    if (contactFormVisible) {
      if (form) {
        document.body.style.overflow = "hidden";
        document.querySelector(".contactFormContainer").style.display = "flex";
        document.querySelector("#Name").value = "";
        document.querySelector("#Email").value = "";
        document.querySelector("#Subject").value = "";
        document.querySelector("#Message").value = "";
      }
    } else {
      if (form) {
        form.style.display = "none";
        document.body.style.overflow = "auto";
      }
    }
  }, [contactFormVisible]);

  return (
    <Provider.Provider
      value={{
        currentTab,
        setCurrentTab,
        currentProject,
        setCurrentProject,
        contactFormVisible,
        setContactFormVisible,
        projects,
        setProjects,
        DevProjects,
        setDevProjects,
        DesProjects,
        setDesProjects,
        skills,
        setSkills,
        experience,
        setExperience,
        education,
        setEducation,
        featured, setFeatured
      }}
    >
      {children}
    </Provider.Provider>
  );
}
