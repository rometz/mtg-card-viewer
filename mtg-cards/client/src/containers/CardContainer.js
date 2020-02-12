import React, { useState, useEffect } from 'react';
//import Card from '../components/Card';
import SetHandler from '../components/SetHandler';
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
    
    // upon mounting, fetch all sets from mtg_sdk
    useEffect(() => {
        dispatch(fetchAllSets())
    }, []);

    handleSetViewer = () => {
        const setProps = [];
        sets.forEach(
            s => setProps.push(s.code)
        );
        console.log(setProps);
        return setProps.map(
            s => <SetHandler key={s.indexOf(s.code)} namej={s.code} />
        )
    }

    return (
        <main>
            <button onClick={() => dispatch(fetchBooster())}>Fetch a booster</button>
            <button>Sets</button>
            
            <div className="sets-menu">
                {this.handleSetViewer()}
            </div>
        </main>
    );
};

export default CardContainer;