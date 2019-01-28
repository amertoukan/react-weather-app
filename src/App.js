import React from 'react';

import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';


const API_KEY = 'f099e6231af7dff61008f63d3315ae07'

class App extends React.Component {
  
  state = {
    temperature : undefined,
    max : undefined, 
    min : undefined,
    city : undefined,
    country : undefined, 
    humidity : undefined, 
    description : undefined, 
    error : undefined
  }

   getWeather = async(e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    //api call                         
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
  
  
    //api data 
    const data =  await api_call.json();

   
   if (city && country) {

   this.setState ({
    temperature: data.main.temp,
    max : data.main.temp_max,
    min:data.main.temp_min,
    city: data.name, 
    country : data.sys.country, 
    humidity: data.main.humidity,
    description: data.weather[0].description,
    error: ""
   });
  }else {
    this.setState({
    temperature: undefined,
    max : undefined,
    min: undefined,
    city: undefined, 
    country : undefined, 
    humidity: undefined,
    description: undefined,
    error: "Please enter both values."
    })
  }
}

  render(){
    return ( 
      <div>
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
             
             <div className="col-xs-5 title-container">
                  <Titles />
             </div>

<div className="col-xs-7 form-container">
    
<Form getWeather={this.getWeather}/>
    
    
<Weather 
      temperature={this.state.temperature}
      max = {this.state.max}
      min = {this.state.min}
      city ={this.state.city}
      country = {this.state.country}
      humidity = {this.state.humidity}
      description = {this.state.description}
        error = {this.state.error}/>
        </div>
             </div>
           </div>
         </div>
       </div>
      </div>
    )
  }
}


export default App;