import React from 'react';




const Weather = (props) => {
return (
<div>
    { props.city && props.country && <p> Location: {props.city}, {props.country}</p> }
        
    {  props.humidity && <p>Humidity:   {props.humidity}</p>}
        
        { props.temperature && <p>Temperature: {props.temperature}</p>}
            
        { props.description && <p>Condition:  {props.description}</p>}
            
        { props.max  && <p>High: {props.max}</p> }
        { props.min &&   <p>Low: {props.min}</p>  }
        
        { props.error && <p> {props.error}</p>}
                
</div>
)}



export default Weather;