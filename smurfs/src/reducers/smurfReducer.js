import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
    HANDLE_NAME,
    HANDLE_AGE,
    HANDLE_HEIGHT,
} from '../actions/smurfActions';
  
const initialState = {
    smurfData: null,
    isFetching: false,
    isPosting: false,
    error: '',
    inputValues: {
        name: '',
        age: 0,
        height: 0
    }
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
        case HANDLE_NAME:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    name: action.payload
                }
            };
        case HANDLE_AGE:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    age: action.payload
                }
            };
        case HANDLE_HEIGHT:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    height: action.payload
                }
            };
        case POST_DATA_START:
            return {
                ...state,
                isPosting: true,
            };
        case POST_DATA_SUCCESS:
            return {
                ...state,
                isPosting: false,
                inputValues: {
                    name: '',
                    age: 0,
                    height: 0
                }
            }
        case POST_DATA_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
