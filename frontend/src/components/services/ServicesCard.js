import React from 'react'
import './ServicesCard.css'

function ServicesCard(props){
  const {item}=props
    return (
        <div className="card border border-secondary servicescard">
      <div className="card-body ">
        <div className="cardheading">{item.facility}</div>
        <h5 className="card-title">{item.distributor}</h5>
        <div className="card-subtitle mb-2">{item.city}</div>
        <p className="card-text"></p>
         <button className="btn btn-primary bg-dark servicescardbutton">{item.helpline}</button>
      </div>
    </div>
    )
}

export default ServicesCard
