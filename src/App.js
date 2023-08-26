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
        <ActivityList className="container"/>        
        <MyActivities className="container"/>
      </body>
    </div>
  );
}

export default App;
