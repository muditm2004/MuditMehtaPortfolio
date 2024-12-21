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
        <img src={currentProject.Images.CardNBanner} alt="" />
        <img src={currentProject.Images.Logo} alt="" />
      </div>

      <div className="aboutContainer">
        <h1>What is {currentProject.Name}</h1>
        <p>{currentProject.Content.What}</p>
      </div>

      <div className="aboutContainer">
        <h1>How it was made</h1>

        <p>{currentProject.Content.How}</p>
      </div>

      <div className="aboutContainer">
        <h1>Skills Used</h1>
        <div className="tagContainer" style={{ marginBottom: "0px" }}>
          {currentProject.Content.Skills.map((skill, index) => (
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
            {console.log(currentProject.Content.Links.Github)}
            {currentProject.Content.Links.Github && (
              <a href={currentProject.Content.Links.Github}>
                {" "}
                <p>
                  <BsGithub size={25} />
                  View on Github
                </p>
              </a>
            )}
            {currentProject.Content.Links.Behance && (
              <a href={currentProject.Content.Links.Behance}>
                {" "}
                <p>
                  <IoLogoBehance size={25} />
                  View on Behance
                </p>
              </a>
            )}
            {currentProject.Content.Links.Weblink && (
              <a href={currentProject.Content.Links.Weblink}>
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
