function setReducer(state = {
    loading: false,
    setData: []
}, action) {
    switch(action.type) {
        case "LOADING_SET":
            return {...state, loading: true, setData: action.payload}

        case "LOADING_SETS":
            return {...state, loading: true, setData: [], }
            
        default:
            return state
    };
};

export default setReducer;