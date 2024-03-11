import './App.css';
import React, { useState } from 'react';
import data from "./Data"
import SearchResults from './SearchResults/SearchResults.js';
import MyActivities from './MyActivities/MyActivities';
import SearchBar from './SearchBar/SearchBar';


function App() {
  
  const [resultsList, setResultsList] = useState(data);
  
  
  
  
  return (
    <div className="App">
      <header>  
      <h1>Select Your Camp Week Activities!</h1>
      <SearchBar />
      </header>
      <body className="App-body">                
        <SearchResults />            
        <MyActivities/>         
      </body>
    </div>
  );
}

export default App;
