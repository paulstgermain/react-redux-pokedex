import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const GEN_RESET = "GEN_RESET";

export const getPokemans = () => dispatch => {
    dispatch({type: FETCH_START});
    dispatch({type: GEN_RESET});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}

export const getGenTwo = () => dispatch => {
    dispatch({type: FETCH_START});
    dispatch({type: GEN_RESET});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}

export const getGenThree = () => dispatch => {
    dispatch({type: FETCH_START});
    dispatch({type: GEN_RESET});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}

export const getGenFour = () => dispatch => {
    dispatch({type: FETCH_START});
    dispatch({type: GEN_RESET});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=107&offset=386')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}

export const getGenFive = () => dispatch => {
    dispatch({type: FETCH_START});
    dispatch({type: GEN_RESET});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=156&offset=493')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}

export const getGenSix = () => dispatch => {
    dispatch({type: FETCH_START});
    dispatch({type: GEN_RESET});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=72&offset=649')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}

export const getGenSeven = () => dispatch => {
    dispatch({type: FETCH_START});
    dispatch({type: GEN_RESET});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=88&offset=721')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}

export const getGenEight = () => dispatch => {
    dispatch({type: FETCH_START});
    dispatch({type: GEN_RESET});

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=89&offset=809')
        .then(res => {
            dispatch({type: FETCH_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAIL, payload: err})
        })
}