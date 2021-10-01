import React from "react";
import './BedsCard.css'

function BedsCard() {
  return (
    <div class="card border border-secondary bedscard">
      <div class="card-body">
        <h5 class="card-title">Lilavati Hospital</h5>
        <h6 class="card-subtitle mb-2">20 Beds</h6>
        <p class="card-text">K.T Marg , Vasai(W),401209</p>
        <div class="btn btn-primary bg-dark">Book Now</div>
      </div>
    </div>
  );
}

export default BedsCard;
