import React from 'react';

import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';


const API_KEY = 'f099e6231af7dff61008f63d3315ae07'

class App extends React.Component {
   getWeather (e) {
    e.preventDefault();
                                
    const api_call =  fetch (`api.openweatherapp.org/data/2.5/forecast?q=London,uk&appid=${API_KEY}&units=metric`)
    const data =  api_call.json();
    console.log(data);
  }

  render(){
    return ( 
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    )
  }
}

export default App;