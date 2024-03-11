import React from 'react';
import './MyActivities.css';
import ActivityList from '../ActivityList/ActivityList.js';


function MyActivities(props) {
   
    
    return (
        <div>
        <h2>My Camp Activities</h2>
        <ActivityList />
        <button type="button">Email My Activity List</button>
        </div>
        
    )
};

export default MyActivities;