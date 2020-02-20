import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllSets } from '../actions/DraftActions';

function SetsDropDown() {
    const dispatch = useDispatch();
    const sets = useState([]);

    //initially, we'll hardcode this for something to work with
    const setItemHC = useState([
        {
            code: 1,
            name: "bob"
        },
        { code: 2, name: 'bob2'}
    ])

    useEffect(() => {
        sets.push(dispatch(fetchAllSets()))
    }, []);
    
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