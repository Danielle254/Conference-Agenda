import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import ActivityList from './ActivityList/ActivityList';
import MyActivities from './MyActivities/MyActivities';
import SearchBar from './SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <header>  
      <h1>Select Your Camp Week Activities!</h1>
      <SearchBar />
      </header>
      <body className="App-body"> 
        <div className="container">
        <h2>Available Camp Activities</h2>        
        <ActivityList /></div>       
        <div className="container">
        <MyActivities/>
        <button type="button">Email My Activity List</button>
        </div>
      </body>
    </div>
  );
}

export default App;
