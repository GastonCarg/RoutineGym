
import axios from 'axios';
import {
    REQUEST_WORKOUTS,
    REQUEST_WORKOUTS_FULLFILLED,
    REQUEST_WORKOUTS_REJECTED
} from '../constants/actions';

export const getWorkouts = (routineId) => {
    return async (dispatch, getState) => {
        try{
            dispatch({ type: REQUEST_WORKOUTS });

            const response = await axios.get('http://192.168.0.181:3000/api/v1/workouts');

            dispatch({
                type: REQUEST_WORKOUTS_FULLFILLED,
                payload: {
                    workouts: [ ...response.data.workouts ],
                },
            })
        }
        catch (err) {
            dispatch({ type: REQUEST_WORKOUTS_REJECTED, msg: err })
        }
    }
}