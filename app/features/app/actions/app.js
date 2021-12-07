import {
    CHANGE_VIEW,
} from '../constants/actions'

export const changeView = (view) => {
    return (dispatch, getState) => {
        dispatch({ type: CHANGE_VIEW, payload: {view} });
    }
}