import React, { useState } from 'react';
import Activity from '../Activity/Activity';
import styles from '../CSSModules/MyActivities.module.css';
import ActivityList from '../ActivityList/ActivityList';



function MyActivities(props) {
    /* const myActivitiesArray = ActivityList.CurrentActivitiesList;
    const handleClick = () => {
        setIsAdded(!isAdded);
    };
    const MyActivitiesList = myActivitiesArray.map((activity) =>
    {
        if (activity.isAdded===true) {    
    (
            <div className={styles.li}>
                <button type="button" className={styles.remove} onClick={handleClick}>x</button>
                <li><Activity name={activity.name} location={activity.location} time={activity.time} /></li>
            </div>
    )}}
    ); */
    
    return (
        <div>
        <h2>My Camp Activities</h2>
        <ul>
            <li>
                <ActivityList isAdded={props.isAdded}/>
            </li>
        </ul>
        </div>

        
        );

           
    
};

export default MyActivities;