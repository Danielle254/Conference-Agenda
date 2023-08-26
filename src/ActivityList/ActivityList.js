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
    const activity1 = activitiesArray[0];
    const activity2 = activitiesArray[1];
    const activity3 = activitiesArray[2];
    return (
        <ul>
            <li><Activity name={activity1.name} location={activity1.location} time={activity1.time}/></li>
            <li><Activity name={activity2.name} location={activity2.location} time={activity2.time}/></li>
            <li><Activity name={activity3.name} location={activity3.location} time={activity3.time}/></li>
        </ul>
    )
};

export default ActivityList;