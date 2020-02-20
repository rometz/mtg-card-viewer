import React, { useState } from 'react';

function SetsDropDown(set) {
    const setItem = useState('');

    //initially, we'll hardcode this for something to work with

    return(
        <select>
            <option value={setItem.code}>{setItem.name}</option>
        </select>
    );
}

export default SetsDropDown;