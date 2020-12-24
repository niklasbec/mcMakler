import {combineReducers} from "redux";
//Import all Reducers here
import applicantsReducer from "./applicantDataReducer";

const rootReducer = combineReducers({
    //Declare all reducers here
    applicants: applicantsReducer,
})

export default rootReducer