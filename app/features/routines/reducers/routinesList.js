
import {
    REQUEST_ROUTINES,
    REQUEST_ROUTINES_FULLFILLED,
    REQUEST_ROUTINES_REJECTED
} from '../constants/actions';

const initialState = {
    status: 'idle',
    routines: [],
};

export default function routines(state = initialState, action) {
    switch (action.type) {
        case REQUEST_ROUTINES:
            return {
                ...state,
                status: 'pending',
            };
        case REQUEST_ROUTINES_FULLFILLED:
            return {
                ...state,
                status: 'fullfilled',
                routines: action.payload.routines,
            };
        case REQUEST_ROUTINES_REJECTED:
            return {
                ...state,
                status: 'rejected',
            };
        default:
            return state;
    }
};
