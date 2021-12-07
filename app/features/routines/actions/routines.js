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

            // Simulamos llamada a la API
            // TODO: Cuando esté listo el back agregar esta parte
            await sleep(1000 * 3);
            // await axios.get('https://www.google.com');

            let dateNow = new Date();

            const routine = [
                {
                    id: 1,
                    name: 'rutina 1',
                    exercises: 5,
                    created: dateNow,
                },
                {
                    id: 2,
                    name: 'rutina 2',
                    exercises: 7,
                    created: dateNow,
                },
                {
                    id: 3,
                    name: 'rutina 3',
                    exercises: 4,
                    created: dateNow,
                },
                {
                    id: 4,
                    name: 'rutina 4',
                    exercises: 9,
                    created: dateNow,
                },
                {
                    id: 5,
                    name: 'rutina 5',
                    exercises: 6,
                    created: dateNow,
                }
            ]

            dispatch({
                type: REQUEST_ROUTINES_FULLFILLED,
                payload: {
                    routines: [ ...getState().routines.routines, ...routine ],
                },
            })
        }
        catch {
            dispatch({ type: REQUEST_ROUTINES_REJECTED })
        }
    }
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};