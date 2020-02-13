import React, { useState } from 'react';

function useListSets(set) {
    const setItem = useState('');

    return(
        <ul>
            <li id={setItem.code}>{setItem.name}</li>
        </ul>
    );
}

export default useListSets;