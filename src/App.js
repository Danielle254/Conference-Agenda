import './App.css';
import React, { useState } from 'react';
import data from "./Data"
import ActivityList from './ActivityList/ActivityList';
import MyActivities from './MyActivities/MyActivities';
/* import SearchBar from './SearchBar/SearchBar'; */


function App() {
  
  const [resultsList, setResultsList] = useState(data);
  
  
  
  
  return (
    <div className="App">
      <header>  
      <h1>Select Your Camp Week Activities!</h1>
      {/* <SearchBar /> */}
      </header>
      <body className="App-body"> 
        
               
        <ActivityList className="container"/>      
        <div className="container">
        <MyActivities/>
        <button type="button">Email My Activity List</button>
        </div>
      </body>
    </div>
  );
}

export default App;
