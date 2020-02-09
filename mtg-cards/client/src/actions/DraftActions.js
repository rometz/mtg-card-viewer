// load a booster from a set
export function fetchBooster() {
    // works as of 02/08
    // could be further trimmed, but not necessary atm
    return async (dispatch) => {
        dispatch({type: "LOADING_BOOSTER"});
        const url = 'http://localhost:3001/api/v1/mtgapi/fetchbooster';
        const response = await fetch(url);
        const set = await response.json();
        const data = await set["cards"];
        return dispatch({
            type: 'FETCH_CARDS', payload: data
        });
    };
}

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