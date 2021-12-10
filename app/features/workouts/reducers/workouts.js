
import {
    REQUEST_WORKOUTS,
    REQUEST_WORKOUTS_FULLFILLED,
    REQUEST_WORKOUTS_REJECTED
} from '../constants/actions';

const initialState = {
    status: 'idle',
    workouts: [],
};

export default function workouts(state = initialState, action) {
    switch (action.type) {
        case REQUEST_WORKOUTS:
            return {
                ...state,
                status: 'pending',
            };
        case REQUEST_WORKOUTS_FULLFILLED:
            return {
                ...state,
                status: 'fullfilled',
                workouts: [...state.workouts, ...action.payload.workouts],
            };
        case REQUEST_WORKOUTS_REJECTED:
            return {
                ...state,
                status: 'rejected',
            };
        default:
            return state;
    }
};
