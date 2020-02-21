import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSets } from '../actions/SetActions';

function SetsDropDown() {
    const dispatch = useDispatch();
    const { allSets } = useSelector(state => ({
        allSets: state.drafts.draftingData
    }));
    const userSet = useState("");
    //initially, we'll hardcode this for something to work with

    useEffect(() => {
        dispatch(fetchAllSets())
    }, []);

    
    return(
        <select>
            {allSets.map(({code, name}) => (
                <option key={code} value={code}>
                    {name}
                </option>
            ))}
        </select>
    );
}

export default SetsDropDown;