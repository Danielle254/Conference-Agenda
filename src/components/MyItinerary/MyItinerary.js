import React from 'react';
import './MyItinerary.css';
import ActivityList from '../ActivityList/ActivityList.js';


function MyItinerary(props) {
   
    
    return (
        <div>
            <div  id='itinerary'>
            <h2>My Itinerary</h2>
            <ActivityList 
            itinerary={props.itinerary}
            listType={"myItinerary"}
            removeFromList={props.removeFromList}
            /></div>
            {props.itinerary.length > 0 && 
            <div className='user--buttons'>                
                <button className='user--button print--button' type="button" onClick={props.printItinerary}>Print My Itinerary</button>
                <button className='user--button clear--button' type="button" onClick={props.clear} >Clear</button>
            </div>}
        </div>
        
    )
};

export default MyItinerary;