import React from "react";
import './CentersCard.css'

function CentersCard(props) {
    const {item}=props

  return (
    <div class="card border border-secondary centerscard">
      <div class="card-body ">
        <h5 class="card-title">{item.name}</h5>
        <div class="card-subtitle mb-2 slotnums"><div className="dose1">Dose 1:<span className="dose1count">{item.available_capacity_dose1}</span></div><div className="dose2"> Dose 2:<span className="dose2count">{item.available_capacity_dose2} </span></div></div>
        <p class="card-text">{item.address}</p>
         <a href="https://selfregistration.cowin.gov.in/"><button class="btn btn-primary bg-dark booknowbutton">Book Now</button></a>
      </div>
    </div>
  );
}

export default CentersCard;
