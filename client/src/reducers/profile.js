import {GET_PROFILE,LOAD_PROFILE} from '../actions/types';

const initialState = {
    loading:false,
    user: null
}

export default (state=initialState,action) => {
    switch(action.type){
        case LOAD_PROFILE:
            return {
                ...state,
                loading: true
            }

        case GET_PROFILE:
            return {
                ...state,
                loading: false,
                user: action.payload
            }    

        default:
            return state;    
    }
}