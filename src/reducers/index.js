import {combineReducers} from 'redux';

import userReducer from "./UserReducer";
import movieReducer from "./MovieReducer";
import fanReducer from "./FanReducer";
import actorReducer from "./ActorReducer";
import adminReducer from "./AdminReducer";
import criticReducer from "./CriticReducer";

const rootReducer = combineReducers({
    userReducer,
    movieReducer,
    fanReducer,
    actorReducer,
    adminReducer,
    criticReducer
});

export default rootReducer;