// load a list of all sets
export function fetchAllSets() {
    return async (dispatch) => {
        dispatch({type: "LOADING_SETS"});
        const url = 'http://localhost:3001/api/v1/mtgapi/fetchallsets';
        const response = await fetch(url);
        const data = await response.json();
        return dispatch({
            type: 'FETCH_CARDS', payload: data
        });
    };
}

// load a specific sets cards
export function fetchSet(id) {
    return async (dispatch) => {
        dispatch({type: "LOADING_SET"});
        // need route and method for RoR api
        const url = '';
        const response = await fetch(url);
        const data = await response.json();
        return dispatch({
            type: 'FETCH_CARDS', payload: data
        });
    };
}