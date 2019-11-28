export function fetchBooster() {
    // needs testing! 11/28/19
    return async (dispatch) => {
        dispatch({type: "LOADING_BOOSTER"});
        const url = '/mtgapi/fetchbooster';
        const response = await fetch(url);
        const set = await response.json();
        const data = await set["cards"];
        return dispatch({
            type: 'FETCH_CARDS', payload: data
        });
    };
}