import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Tag from "./Tag";
import { BsGithub } from "react-icons/bs";
import { IoLogoBehance } from "react-icons/io5";
import { IoGlobeSharp } from "react-icons/io5";
import { Provider } from "../Context/MyContext";

export default function CardPage() {
  const { id } = useParams();
  const location = useLocation();

  const { DevProjects, DesProjects, currentProject, setCurrentProject } =
    useContext(Provider);

  useEffect(() => {
    let project;
    if (location.pathname.includes("DevProjects")) {
      if (DevProjects) {
        project = DevProjects.find((project) => project._id === id);
        setCurrentProject(project);
      } else {
        const resp = fetch(`/prjectDetails/${id}`)
          .then((res) => res.json())
          .then((data) => setCurrentProject(data));
      }
    } else if (location.pathname.includes("DesProjects")) {
      if (DesProjects) {
        project = DesProjects.find((project) => project._id === id);
        setCurrentProject(project);
      } else {
        const resp = fetch(`/prjectDetails/${id}`)
          .then((res) => res.json())
          .then((data) => setCurrentProject(data));
      }
    }

    // Set the project if found
  }, [id, location.pathname, DevProjects, DesProjects]);

  if (!currentProject) {
    return <div>l</div>;
  }

  const links = currentProject?.Content?.Link || {};

  return (
    <>
      <div className="pageBanner">
        <img src={currentProject.Thumbnail} alt="" />
        <img src={currentProject.Logo} alt="" />
      </div>

      {/* <div className="aboutContainer">
        <h1>About {currentProject.Name}</h1>
        <p>{currentProject.Desc.What}</p>
      </div> */}

      <div className="aboutContainer">
        <h1>About {currentProject.Name}</h1>
        <ul>
          <li>{currentProject.Desc.TechBG[0]}</li>
          <li>{currentProject.Desc.TechBG[1]}</li>
          <li>{currentProject.Desc.TechBG[2]}</li>
        </ul>
        {currentProject.Desc.TechBG.map((para) => {
          <p> hhh </p>;
        })}
      </div>

      <div className="aboutContainer">
        <h1>Skills Used</h1>
        <div className="tagContainer" style={{ marginBottom: "0px" }}>
          {currentProject.Desc.Skills.map((skill, index) => (
            <>
              <Tag tagName={skill.Name} color={skill.Color} />
            </>
          ))}
        </div>
      </div>

      <div className="aboutContainer">
        <h1>Links</h1>

        <div className="linksContainer">
          <div className="linksContainer-LinkCol">
            {console.log(currentProject.Links.Github)}
            {currentProject.Links.Github && (
              <a href={currentProject.Links.Github}>
                {" "}
                <p>
                  <BsGithub size={25} />
                  View on Github
                </p>
              </a>
            )}
            {currentProject.Links.Behance && (
              <a href={currentProject.Links.Behance}>
                {" "}
                <p>
                  <IoLogoBehance size={25} />
                  View on Behance
                </p>
              </a>
            )}
            {currentProject.Links.Weblink && (
              <a href={currentProject.Links.Weblink}>
                {" "}
                <p>
                  <IoGlobeSharp size={25} />
                  View LIVE Project
                </p>
              </a>
            )}
            {}
            {/* <p><IoGlobeSharp size={25} />Github</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
