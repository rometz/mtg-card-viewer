import React, { useState, useEffect } from 'react';
//import Card from '../components/Card';
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
    
    // upon mounting, fetch all sets from mtg_sdk
    useEffect(() => {
        dispatch(fetchAllSets())
    }, [])

    return (
        <main>
            <button onClick={() => dispatch(fetchBooster())}>Fetch a booster</button>
            <button onClick={() => sets}>Fetch all Sets</button>
        </main>
    );
};

export default CardContainer;