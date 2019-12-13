import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';
export const HANDLE_NAME = 'HANDLE_NAME';
export const HANDLE_AGE = 'HANDLE_AGE';
export const HANDLE_HEIGHT = 'HANDLE_HEIGHT';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT';

export const handleName = e => {
    return { type: HANDLE_NAME, payload: e.target.value }
}

export const handleAge = e => {
    return { type: HANDLE_AGE, payload: e.target.value }
}

export const handleHeight = e => {
    return { type: HANDLE_HEIGHT, payload: e.target.value }
}

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
        });
    };

export const handleSubmit = data => dispatch => {
    dispatch({ type: POST_DATA_START})
    const newSmurf = {...data, id: Date.now()}
    console.log(JSON.stringify(newSmurf));

    axios
        .post(`http://localhost:3333/smurfs`, newSmurf)
        .then(res => {
            console.log(res)
            dispatch({ type: POST_DATA_SUCCESS, payload: res.data }, getSmurfs())
        })
        .catch(err => {
            dispatch({ type: POST_DATA_FAILURE, payload: err })
        })
}