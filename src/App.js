import Nav from './component/Nav.js';
import Imagelist from './component/Imagelist';

import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {

  state = { images: [] };
  onsearchsubmit=async term => {

   const response = await axios.get('https://deezerdevs-deezer.p.rapidapi.com/search/', {
     
      params:{q:term},
      headers: {
        'x-rapidapi-key': 'ed41efa999msh8c52bd818ecc78dp1b6c59jsn6c5f016512d1',
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    });


    this.setState({images:response.data.data})
  
  }
      
render(){
  return (
    <div className="App">
      <Nav onsubmit={this.onsearchsubmit} />
      <Imagelist img={this.state.images}  />
      
    </div>
  );
}};
export default App;
