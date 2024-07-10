import React from 'react';
import './Activity.css';


export default function Activity(props) {
    const activity = {
        title: props.title,
        speaker: props.speaker,
        timeHour: props.timeHour,
        timeMinute: props.timeMinute,
        displayTime: props.displayTime,
        id: props.id,
        location: props.location
    }
    
    return (
        <div className="activity">
            <p className='title'>{props.title}</p>
            <p className='details'>{props.speaker}</p> 
            <p>{props.displayTime} | {props.location}</p>
            <button onClick={() => props.setterFunction(activity)} type='button' className={props.buttonType === "Remove" ? "removeButton" : "addButton"}>{props.buttonType}</button>
        </div>
    )
}