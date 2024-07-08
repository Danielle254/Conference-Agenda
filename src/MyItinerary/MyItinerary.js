import React from 'react';
import './MyItinerary.css';
import ActivityList from '../ActivityList/ActivityList.js';


function MyItinerary(props) {
   
    
    return (
        <div>
        <h2>My Itinerary</h2>
        <ActivityList
        itinerary={props.itinerary}
        listType={"myItinerary"}
        removeFromList={props.removeFromList}
        />
        <button type="button">Print My Itinerary</button>
        <button type="button">Clear</button>
        </div>
        
    )
};

export default MyItinerary;