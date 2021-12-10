
import { combineReducers } from 'redux';

import profiles from '../features/profiles/reducers/profiles';
import app from '../features/app/reducers/app';
import routines from '../features/routines/reducers/routinesList';
import workouts from '../features/workouts/reducers/workouts';

const rootReducer = combineReducers({
    app,
    profiles,
    routines,
    workouts
});

export default rootReducer;
