import React from 'react';
import './Activity.css';


export default function Activity(props) {
    const activity = {
        title: props.title,
        speaker: props.speaker,
        time: props.time,
        displayTime: props.displayTime,
        id: props.id
    }
    
    return (
        <div className="activity">
            <p className='title'>{props.title}</p>
            <p className='details'>{props.speaker} | {props.displayTime}</p>
            <button onClick={() => props.setterFunction(activity)} type='button' className='activity--button'>{props.buttonType}</button>
        </div>
    )
}