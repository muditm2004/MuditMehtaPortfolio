import React, { useContext } from "react";
import Tag from "./Tag";
import { Provider } from "../Context/MyContext";

export default function () {
  const {skills} = useContext(Provider);
  return (
    <>

      


      {skills.map((skill) => {
        return (
          <>
            <h3 className="projectCategory">{skill.Type}</h3>
            <div className="tagContainer">
              {skill.Skills.map((skill) => {
                return <Tag tagName={skill.Name} color={skill.Color} />;
              })}
            </div>
          </>
        );
      })}

<div className="endSpace"></div>
    </>
  );
}
