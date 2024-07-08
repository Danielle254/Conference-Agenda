import './App.css';
import React, { useState } from 'react';
import data from "./Data.js"
import ConferenceAgenda from './ConferenceAgenda/ConferenceAgenda.js';
import MyItinerary from './MyItinerary/MyItinerary.js';



function App() {  
  
  const [itineraryData, setItineraryData] = useState([]);

  function addToList(activity) {
    setItineraryData(prevItineraryData => {
      const newItineraryData = []
      const id = activity.id;      
      if (prevItineraryData.length == 0) {
        newItineraryData.push(activity)
        return newItineraryData;  
      } else {
        const contains = prevItineraryData.every(
          item => item.id != id
        )
        return contains ? [...prevItineraryData, activity] :  prevItineraryData
      }
    })
  }

  function removeFromList(activity) {
    setItineraryData(prevItineraryData => {      
      const newItineraryData = prevItineraryData.filter(
          item => item.id != activity.id
        )
      return newItineraryData;
    })
  }
   
  
  return (
    <div className="App">        
      <h1>Select Your Conference Activities!</h1>      
      <div className="App-body">                
        <ConferenceAgenda 
        agenda={data}
        addToList={addToList}
        />            
        <MyItinerary
        itinerary={itineraryData}
        removeFromList={removeFromList}
        />         
      </div>
    </div>
  );
}

export default App;
