import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <div>
            <label>Search: </label>
            <input type="text"></input>
            <button type="submit" >GO</button>
        </div>
    )
};

export default SearchBar;