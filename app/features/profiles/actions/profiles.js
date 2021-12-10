import axios from 'axios';

import {
    REQUEST_PROFILE,
    REQUEST_PROFILE_FULLFILLED,
    REQUEST_PROFILE_REJECTED
} from '../constants/actions'

export const getProfiles = (profile) => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: REQUEST_PROFILE });

            // Simulamos una llamada a la API
            await sleep(1000 * 3);
            // await axios.get('https://www.google.com');

            dispatch({
                type: REQUEST_PROFILE_FULLFILLED,
                payload:{
                    profiles: [...getState().profiles.profiles, `Gastón Cargnelutti`],
                },
            })
        }
        catch {
            dispatch({ type: REQUEST_PROFILE_REJECTED });
        }
    }
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};