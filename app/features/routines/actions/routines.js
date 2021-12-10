import axios from 'axios';
import { REQUEST_PROFILE } from '../../profiles/constants/actions';

import {
    REQUEST_ROUTINES,
    REQUEST_ROUTINES_FULLFILLED,
    REQUEST_ROUTINES_REJECTED
} from '../constants/actions';

// Debería pasar algo como parámetro???
export const getRoutines = (routine) => {
    return async (dispatch, getState) => {
        try{
            dispatch({ type: REQUEST_ROUTINES });

            const response = await axios.get('http://192.168.0.181:3000/api/v1/routines');

            dispatch({
                type: REQUEST_ROUTINES_FULLFILLED,
                payload: {
                    routines: [ ...response.data.routines ],
                },
            })
        }
        catch (err) {
            dispatch({ type: REQUEST_ROUTINES_REJECTED, msg: err })
        }
    }
}