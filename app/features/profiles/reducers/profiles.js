
import {
    REQUEST_PROFILE,
    REQUEST_PROFILE_FULLFILLED,
    REQUEST_PROFILE_REJECTED
} from '../constants/actions';

const initialState = {
    status: 'idle',
    profiles: [],
};

export default function profiles(state = initialState, action) {
    switch (action.type) {
        case REQUEST_PROFILE:
            return {
                ...state,
                status: 'pending',
            };
        case REQUEST_PROFILE_FULLFILLED:
            return {
                ...state,
                status: 'fullfilled',
                profiles: action.payload.profiles,
            };
        case REQUEST_PROFILE_REJECTED:
            return {
                ...state,
                status: 'rejected',
            };
        default:
            return state;
    }
};
