import React,{useState} from 'react'

const HospitalHome = () => {
    const [reg, setreg] = useState([])
    const stateWiseCases = async () =>{
         fetch("https://api.rootnet.in/covid19-in/stats/history").then(res=>res.json()).then(res=>setreg(res.data[534].regional))
        
      }
    return (
        <div>
            hospital
            {console.log(reg)}
            
            <button onClick={stateWiseCases}>ok</button>
        </div>
    )
}

export default HospitalHome
