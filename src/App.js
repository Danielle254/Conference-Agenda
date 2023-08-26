import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import ActivityList from './ActivityList/ActivityList';
import MyActivities from './MyActivities/MyActivities';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActivityList />
        <MyActivities />
        <SearchBar />
        <SearchResults />
      </header>
    </div>
  );
}

export default App;
