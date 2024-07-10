import './App.css';
import React, { useState, useEffect } from 'react';
import data from "./Data.js"
import ConferenceAgenda from './components/ConferenceAgenda/ConferenceAgenda.js';
import MyItinerary from './components/MyItinerary/MyItinerary.js';
import Banner from "./components/Banner/banner.js"



function App() {  
  
  const [itineraryData, setItineraryData] = useState(JSON.parse(localStorage.getItem("itinerary")) || []);

  useEffect(() => {
    localStorage.setItem("itinerary", JSON.stringify(itineraryData))
    }, [itineraryData])

  function compareTimes(a, b) {
    const hour1 = a.timeHour;
    const minute1 = a.timeMinute;
    const hour2 = b.timeHour;
    const minute2 = b.timeMinute;
    const date1 = new Date(2024, 11, 17, hour1, minute1, 0);
    const date2 = new Date(2024, 11, 17, hour2, minute2, 0);
    
    return date1 - date2;
  }

  function addToList(activity) {
    setItineraryData(prevItineraryData => {
      let newItineraryData = []
      const idToTest = activity.id;      
      if (prevItineraryData.length === 0) {
        newItineraryData.push(activity) 
        console.log(newItineraryData);       
        return newItineraryData;  
      } else {
        const contains = prevItineraryData.every(
          item => item.id !== idToTest
        )
        if (contains) {
          newItineraryData = [...prevItineraryData, activity];           
          
          return newItineraryData.sort(compareTimes);
        } else {
          return prevItineraryData;
        }        
      }
    })
  }

  function removeFromList(activity) {
    setItineraryData(prevItineraryData => {      
      const newItineraryData = prevItineraryData.filter(
          item => item.id !== activity.id
        )
      return newItineraryData;
    })
  }

  function clearItinerary() {
    setItineraryData([]);
  }

  function printItinerary() {
    const fetchItinerary = document.getElementById('itinerary').innerHTML;
    const areaToPrint = fetchItinerary.replaceAll('<button type="button" class="removeButton">Remove</button>', "<p>_______________</p>");
    console.log(fetchItinerary);
    console.log(typeof(fetchItinerary));
    
    const a = window.open('', '', 'height=auto, width=500');
    a.document.write('<html>');
    a.document.write('<body>');
    a.document.write(areaToPrint);
    a.document.write('</body>');
    a.document.write('</html>');
    a.document.close();
    a.print();
  }
   
  
  return (
    <div className="App">        
      <Banner /> 
      <div className="App-body">                
        <ConferenceAgenda 
        agenda={data}
        addToList={addToList}
        compareTimes={compareTimes}
        />            
        <MyItinerary
        itinerary={itineraryData}
        removeFromList={removeFromList}
        clear={clearItinerary}
        printItinerary={printItinerary}
        />         
      </div>
    </div>
  );
}

export default App;
