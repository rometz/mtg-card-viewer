import React, { useState, useEffect } from 'react';
//import Card from '../components/Card';
import SetsDropDown from '../components/SetsDropDown';
import { useDispatch, useSelector } from 'react-redux';
//import { createSelector } from 'reselect';
//import { createCard } from '../actions/CardActions';
import { fetchBooster } from '../actions/DraftActions';

const CardContainer = () => {
    const dispatch = useDispatch();
    const { sets } = useSelector(state => ({
        sets: state.drafts.fetchAllSets
    }));
    // these hooks begin card/set handle interaction
    const cardsReturned = useState([]);
    const setList = SetsDropDown();

    // will be called when the user wants to view a list of sets
    // will toggle a component to drop down a list of sets to view
    function handleSetViewer() {
        const setProps = [];
        if (sets !== undefined) {
            sets.forEach(
                s => setProps.push(({code: s.code}, {name: s.name}))
            );
            console.log(setProps);
            setProps.map(
                s => setList(s)
            );
        }
    }

    return (
        <main>
            <button onClick={() => dispatch(fetchBooster())}>Fetch a booster</button>
            {setList}
        </main>
    );
};

export default CardContainer;