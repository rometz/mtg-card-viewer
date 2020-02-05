import React from 'react';
//import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
//import { createSelector } from 'reselect';
//import { createCard } from '../actions/CardActions';
import { fetchBooster } from '../actions/DraftActions';

const CardContainer = () => {
    const dispatch = useDispatch();
    const cards = useSelector(
        state => state.cards.createCard,
        state => state.drafts.fetchBooster
    )

    return (
        <main>
            <button onClick={() => dispatch(fetchBooster())}>Fetch a booster</button>
        </main>
    );
};

export default CardContainer;