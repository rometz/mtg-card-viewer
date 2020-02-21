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