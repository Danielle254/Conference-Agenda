import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import styles from '../CSSModules/ActivityList.module.css'

export const activitiesArray = [
    {
        name: "Canoeing",
        location: "Apple River",
        time: "Tuesday morning",
        id: 1,
        isAdded: false
    },
    {
        name: "Horseback Riding",
        location: "Bayview Stables",
        time: "Wednesday afternoon", 
        id: 3,
        isAdded: false
    },
    {
        name: "Archery",
        location: "City Rec Center",
        time: "Tuesday afternoon",
        id: 2,
        isAdded: true
    }
];



function ActivityList(props) {
    /* const [isAdded, setIsAdded] = useState(false);
    
    const handleClick = () => {
        setIsAdded(!isAdded);
    }; */
    
    const CurrentActivitiesList = activitiesArray.filter((activity) => (activity.isAdded==false)).map((activity) =>
          
    (
        <div className={styles.li}>
        <button type="button" className={styles.add} /* onClick={handleClick} */>+</button>
        <li><Activity name={activity.name} location={activity.location} time={activity.time} /></li>
        
        </div>
    )
        
            );
    
    return (
        
        <ul>
            {CurrentActivitiesList}
        </ul>
        
    )
};

export default ActivityList;
