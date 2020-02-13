import React, { useState, useEffect } from 'react';
//import Card from '../components/Card';
import useListSets from '../components/useListSets';
import { useDispatch, useSelector } from 'react-redux';
//import { createSelector } from 'reselect';
//import { createCard } from '../actions/CardActions';
import { fetchBooster } from '../actions/DraftActions';
import { fetchAllSets } from '../actions/DraftActions';

const CardContainer = () => {
    const dispatch = useDispatch();
    const { cards, booster, sets } = useSelector(state => ({
        cards: state.cards.createCard,
        booster: state.drafts.fetchBooster,
        sets: state.drafts.fetchAllSets
    }));
    const cardsReturned = useState([]);
    const showSets = useState(false);
    const setList = useListSets();
    
    // upon mounting, fetch all sets from mtg_sdk
    useEffect(() => {
        dispatch(fetchAllSets())
    }, []);

    // will be called when the user wants to view a list of sets
    handleSetViewer = () => {
        const setProps = [];
        sets.forEach(
            s => setProps.push(({code: s.code}, {name: s.name}))
        );
        console.log(setProps);
        setProps.map(
            s => setList(s)
        );
        
    }

    return (
        <main>
            <button onClick={() => dispatch(fetchBooster())}>Fetch a booster</button>
            <button>Sets</button>
            
            <div className="sets-menu">
                {handleSetViewer()}
            </div>
        </main>
    );
};

export default CardContainer;