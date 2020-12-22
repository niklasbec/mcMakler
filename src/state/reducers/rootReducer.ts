import {combineReducers} from "redux";
//Import all Reducers here
import reducer1 from "./reducer1";

const rootReducer = combineReducers({
    //Declare all reducers here
    reducer1: reducer1,
})

export default rootReducer