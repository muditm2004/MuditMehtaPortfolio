import React, { useContext } from "react";
import Card from "./Card";
import { Provider } from "../Context/MyContext";
import { useNavigate } from "react-router-dom";

export default function DevelopmentProjects() {
  const { DevProjects, setCurrentProject, currentProject } = useContext(Provider);
  const navigate= useNavigate();


  function CardClickhandler(e){
    let id=e.target.id;
    
    navigate(`/DevProjects/${id}`);
    
      
      
  }


  let categories = {};
  DevProjects.forEach((element) => {
    if (!categories[element.Category]) {
      categories[element.Category] = [];
    }

    categories[element.Category].push(element);
  });

  return (
    <>
      {Object.keys(categories).map((category,key) => {
        return (
          <>
              <h3 className="projectCategory">{category}</h3>
              <h6 className="projectHead">(Click on the cards to know more)</h6>
              <div className="GridContainer">
                {Object.values(categories[category]).map((project) => {
                  return(
                  <Card
                  img={project.Thumbnail}
                  name={project.Name}
                  desc={project.oneLiner}
                  id={project._id}
                  onClick={CardClickhandler}
                />)
                })}
                
                
              </div>
            </>
        )
            
        
        
      })}

        <div className="endSpace"></div>
    </>
  );
}
