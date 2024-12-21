import React from "react";

export default function Tag(props) {
  return (
    <div
      className="tag"
      onMouseOverCapture={(e) => {
        const child = document.getElementById(`${props.tagName}`);
        const bgColor = window.getComputedStyle(child).backgroundColor;
        e.target.style.boxShadow = `0 0 10px 2px ${bgColor}`;
      }}
      onMouseLeave={(e) => {
        e.target.style.boxShadow = "none";
      }}
    >
      <div className="SkillcolorBlur" id={`${props.tagName}`} style={{ backgroundColor: `${props.color}` }}></div>
      <div className="Skillcolor" id={props.tagName} style={{ backgroundColor: `${props.color}` }}></div>
      {props.tagName}
    </div>
  );
}
