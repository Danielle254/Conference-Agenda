import React, { useState } from 'react';
import Activity from '../Activity/Activity';

const activitiesArray = [
    {
        name: "Canoeing",
        location: "Apple River",
        time: "Tuesday morning"
    },
    {
        name: "Horseback Riding",
        location: "Bayview Stables",
        time: "Wednesday afternoon"
    },
    {
        name: "Archery",
        location: "City Rec Center",
        time: "Tuesday afternoon"
    }
];



function ActivityList(props) {
    const sampleActivities = activitiesArray.map((activity) =>
        <li><Activity name={activity.name} location={activity.location} time={activity.time}/></li>
    );
    
    return (
        <ul>
            {sampleActivities}
        </ul>
    )
};

export default ActivityList;