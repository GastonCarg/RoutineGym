
import {
    CHANGE_VIEW,
} from '../constants/actions';

const initialState = {
    status: 'idle',
    view: 'routineStack',
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VIEW:
            return {
                ...state,
                view: action.payload.view
            };
        default:
            return state;
    }
};
