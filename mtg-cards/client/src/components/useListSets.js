import React from 'react';

function useListSets(set) {
    
    return(
        <ul>
            <li id={set.code}>{set.name}</li>
        </ul>
    );
}