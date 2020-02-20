import React, { useState } from 'react';

function SetsDropDown(set) {
    const setItem = useState('');

    //initially, we'll hardcode this for something to work with
    const setItemHC = useState([
        {
            code: 1,
            name: "bob"
        },
        { code: 2, name: 'bob2'}
    ])
    return(
        <select>
            {setItemHC.map(({ code, name}) => (
                <option key={code} value={code}>
                    {name}
                </option>
            ))}
        </select>
    );
}

export default SetsDropDown;