import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/smurfActions';
  
const initialState = {
    smurfData: null,
    isFetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
            ...state,
            isFetching: true
            };
        case FETCH_DATA_SUCCESS:
            return {
            ...state,
            smurfData: action.payload,
            isFetching: false,
            error: null
            };
        case FETCH_DATA_FAILURE:
            return {
            ...state,
            isFetching: false,
            error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
