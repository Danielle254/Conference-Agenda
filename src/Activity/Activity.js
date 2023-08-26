import React, { useState } from 'react';



function Activity(props) {
    return (
        <div>
        <h2>{props.name}</h2>
        <p>{props.location}</p>
        <p>{props.time}</p>
        </div>
    )
};

export default Activity;