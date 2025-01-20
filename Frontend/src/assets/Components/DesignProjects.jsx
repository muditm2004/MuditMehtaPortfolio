import React, { useContext } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

import { Provider } from "../Context/MyContext";
export default function DesignProjects() {
  const { DesProjects } = useContext(Provider);
  const navigate= useNavigate();
  
  function CardClickhandler(e){
    let id=e.target.id;
    
    navigate(`/DesProjects/${id}`);
    
      
      
  }



    let categories = {};
    DesProjects.forEach((element) => {
      if (!categories[element.Category]) {
        categories[element.Category] = [];
      }
  
      categories[element.Category].push(element);
    });
  
    return (
      <>
        {Object.keys(categories).map((category) => {
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
                    desc={project.Desc.What}
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