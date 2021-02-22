import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, GEN_RESET } from '../actions';

const initialState = {
    pokemans: null,
    pokeman: null,
    error: '',
    isFetching: false
}


const reducer = (state = initialState, action) => {
        switch(action.type){
            case FETCH_START:
                return {
                    ...state,
                    isFetching: true,
                };

            case FETCH_SUCCESS:
                return {
                    ...state,
                    pokemans: action.payload,
                    isFetching: false
                };

            case FETCH_FAIL:
                return{
                    ...state,
                    error: `Received error ${action.payload}`,
                    isFetching: false
                }

            case GEN_RESET:
                return{
                    ...state,
                    pokemans: null
                }

            default:
                return state;
        }
}

export default reducer;