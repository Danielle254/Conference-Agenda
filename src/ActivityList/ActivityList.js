import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import styles from '../CSSModules/ActivityList.module.css'

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
        <li><Activity name={activity.name} location={activity.location} time={activity.time} className={styles.li}/></li>
    );
    
    return (
        <div>
        <h2>Available Camp Activities</h2>
        <ul>
            {sampleActivities}
        </ul>
        </div>
    )
};

export default ActivityList;