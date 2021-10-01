import {useState,useEffect} from 'react'
import './Casecount.css'


export default function Casecount({ currentData,place }) {

    
    if(currentData !== null){
        return (
            <div className ='case-count-container'>
                 <div className='place'>Cases across {place}</div>
                <div className='active-container'>
                    <span className='active'>{currentData.active}</span>
                    <span className = ''>ACTIVE CASES</span>
                </div>
                <div className='subcard-container'>
                    <div className='subcard total'>
                        <span className='count'>{currentData.cases}</span>
                        <span>TOTAL</span>
                    </div>
                    <div className='subcard recovered'>
                        <span className='count'>{currentData.recovered}</span>
                        <span>RECOVERED</span>
                    </div>
                    <div className='subcard deceised'>
                        <span className='count'>{currentData.deaths}</span>
                        <span>DECEISED</span>
                    </div>
                </div>
            </div>
        )
    }
    return null;
    
}
