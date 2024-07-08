import React from 'react';
import Activity from '../Activity/Activity';
import './ActivityList.css';



export default function ActivityList(props) {
    const listType = props.listType;
    const list = listType === "agenda" ? props.agenda : props.itinerary
    const buttonType = listType === "agenda" ? "Add to Itinerary" : "Remove"
    const setterFunction = listType === "agenda" ? props.addToList : props.removeFromList
    
    const activities = list.map(
        activity => {
            return (
                <Activity
                key={activity.id}
                id={activity.id}
                title={activity.title}
                speaker={activity.speaker}
                buttonType={buttonType}
                displayTime={activity.displayTime}
                setterFunction={setterFunction}
                />
            )
        }
    )

        
      
    
    return (
        <div>         
        {activities}
        </div>
    )
}
