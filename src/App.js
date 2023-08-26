import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import ActivityList from './ActivityList/ActivityList';
import MyActivities from './MyActivities/MyActivities';
import SearchBar from './SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <h1>Select Your Camp Week Activities!</h1>
      <SearchBar />
      <header className="App-header">           
        <ActivityList className="container"/>        
        <MyActivities className="container"/>
      </header>
    </div>
  );
}

export default App;
