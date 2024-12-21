import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card" style={{ backgroundImage: `url(${props.img})` }} onClick={props.onClick}>
        <div className="card-overlay" >
          <div className="card-overlay-line" id={props.id}>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
