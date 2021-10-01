import React from "react";
import './BedsCard.css'

function BedsCard({name,beds,city,state}) {
  return (
    <div className="card border border-secondary">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2">{beds}</h6>
        <p className="card-text">{city},{state}</p>
        <div className="btn btn-primary bg-dark">Book Now</div>
      </div>
    </div>
  );
}

export default BedsCard;
