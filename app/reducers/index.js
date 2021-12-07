
import { combineReducers } from 'redux';

import profiles from '../features/profiles/reducers/profiles';
import app from '../features/app/reducers/app';
import routines from '../features/routines/reducers/routinesList';

const rootReducer = combineReducers({
    app,
    profiles,
    routines
});

export default rootReducer;
