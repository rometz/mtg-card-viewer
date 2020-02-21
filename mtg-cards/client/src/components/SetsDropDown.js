import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllSets } from '../actions/DraftActions';

function SetsDropDown() {
    const dispatch = useDispatch();
    const { allSets } = useSelector(state => ({
        allSets: state.drafts.draftingData
    }));
    console.log(allSets)
    //initially, we'll hardcode this for something to work with
    const setItemHC = useState([
        {
            code: 1,
            name: "bob"
        },
        { code: 2, name: 'bob2'}
    ])

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