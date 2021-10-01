import React from "react";
import './CentersCard.css'

function CentersCard(props) {
    const {item}=props

  return (
    <div class="card border border-secondary centerscard">
      <div class="card-body ">
        <h5 class="card-title">{item.name}</h5>
        <h6 class="card-subtitle mb-2 slotnums">Dose 1:{item.available_capacity_dose1} Dose 2:{item.available_capacity_dose2} </h6>
        <p class="card-text">{item.address}</p>
        <div class="btn btn-primary bg-dark">Book Now</div>
      </div>
    </div>
  );
}

export default CentersCard;
