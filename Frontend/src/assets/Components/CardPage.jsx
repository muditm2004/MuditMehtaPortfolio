import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Tag from "./Tag";
import { BsGithub } from "react-icons/bs";
import { IoLogoBehance } from "react-icons/io5";
import { IoGlobeSharp } from "react-icons/io5";
import { Provider } from "../Context/MyContext";
import Card from "./Card";
import { FaMedium } from "react-icons/fa6";

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
        const resp = fetch(
          `${import.meta.env.VITE_API_URL}/prjectDetails/${id}`
        )
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
      <div className="cardPage">
        <div className="pageBanner">
          <img src={currentProject.Thumbnail} alt="" />
          <h1>{currentProject.Name}</h1>
          {/* <img src={currentProject.Logo} alt="" /> */}
        </div>
      </div>
      <div className="cardPage-content">
        <div className="aboutContainer" id="problemStatement">
          <div className="pageHead" id="problemStatementHead">
            <h1>Problem Statement</h1>
          </div>
          <div className="pageContent-w">
            {/* <p> */}
            {currentProject.Desc.Problem}
            {/* </p> */}
          </div>
        </div>
        <div className="cardPage-content-dualSection">
          <div className="col">
            <div className="aboutContainer" id="aboutProject">
              <div className="pageHead" id="aboutProjectHead">
                <h1>About {currentProject.Name}</h1>
              </div>
              <div className="pageContent-w">{currentProject.Desc.About}</div>
            </div>
          </div>
          <div className="col">
            <img
              src={currentProject.Logo}
              alt=""
              style={{ borderRadius: "20px", padding: "10px" }}
            />
          </div>
        </div>

        <div className="cardPage-content-dualSection">
          <div className="col">
            {location.pathname.includes("DevProjects") ? (
              <div className="aboutContainer" id="aboutProject">
                <div className="pageHead" id="aboutProjectHead">
                  <h1> 👨‍💻 Feature Prioritization</h1>
                </div>
                <ul>
                  {currentProject.Desc.Feature.map((para, idx) => (
                    <li key={idx}>{para}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="aboutContainer" id="aboutProject">
                <div className="pageHead" id="aboutProjectHead">
                  <h1>👨‍💻 Design Strategy & Execution</h1>
                </div>

                <ul>
                  {currentProject.Desc.Impact.map((para, idx) => (
                    <li key={idx}>{para}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="col">
            {/* <img src={currentProject.Logo} alt="" /> */}
            <Card
              img={currentProject.Thumbnail}
              name={currentProject.Name}
              desc={currentProject.oneLiner}
              id={currentProject._id}
              anotherClass="cardPage-card"
              // onClick={CardClickhandler}
            />
          </div>
        </div>

        <div className="cardPage-content-dualSection">
          <div className="col">
            <div className="aboutContainer" id="aboutProject">
              <div className="pageHead" id="aboutProjectHead">
                <h1> 📉 Challenges & Trade-Offs</h1>
              </div>
              <ul>
                {currentProject.Desc.Challenge.map((para, idx) => (
                  <li key={idx}>{para}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col">
            <div className="aboutContainer" id="aboutProject">
              <div className="pageHead" id="aboutProjectHead">
                <h1> 😄 User Impact</h1>
              </div>
              <ul>
                {currentProject.Desc.Impact.map((para, idx) => (
                  <li key={idx}>{para}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="aboutContainer" id="aboutProject">
          <div className="pageHead" id="aboutProjectHead">
            <h1>Skills Used</h1>
          </div>
          <div className="tagContainer" style={{ marginBottom: "0px" }}>
            {currentProject.Desc.Skills.map((skill, index) => (
              <>
                <Tag tagName={skill.Name} color={skill.Color} />
              </>
            ))}
          </div>
        </div>
        {(currentProject.Links.Github ||
          currentProject.Links.Behance ||
          currentProject.Links.Weblink ||
          currentProject.Links.CaseStudy) && (
          <div className="aboutContainer" id="aboutProject">
            <div className="pageHead" id="aboutProjectHead">
              <h1>Links</h1>
            </div>
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
                {currentProject.Links.CaseStudy && (
                  <a href={currentProject.Links.CaseStudy}>
                    {" "}
                    <p>
                      <FaMedium size={25} />
                      View Case Study
                    </p>
                  </a>
                )}

                {}
                {/* <p><IoGlobeSharp size={25} />Github</p> */}
              </div>
            </div>
          </div>
        )}

        {/* <div className="cardPage-content-dualSection">
          <div className="cardpage-contentLeft">
            <div className="aboutContainer" id="aboutProject">
              <div className="pageHead" id="aboutProjectHead">
              <h1>About {currentProject.Name}</h1>
              </div>
              <div className="pageContent-w">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita atque voluptatum deleniti ipsum, soluta dolores
                veritatis nemo possimus sapiente quod labore quidem sequi minus
                magni quam. Neque ullam dolores laboriosam.
              </div>
            </div>
          </div> */}
        {/* <div className="cardPage-content-right">
            <div className="aboutContainer" id="aboutProject">
              <div className="pageHead" id="aboutProjectHead">
              <h1>About {currentProject.Name}</h1>
              </div>
              <div className="pageContent-w">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita atque voluptatum deleniti ipsum, soluta dolores
                veritatis nemo possimus sapiente quod labore quidem sequi minus
                magni quam. Neque ullam dolores laboriosam.
              </div>
            </div>
          </div> 
        </div>*/}
        {/* <div className="aboutContainer">
          <h1>Skills Used</h1>
          <div className="tagContainer" style={{ marginBottom: "0px" }}>
            {currentProject.Desc.Skills.map((skill, index) => (
              <>
                <Tag tagName={skill.Name} color={skill.Color} />
              </>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
}
