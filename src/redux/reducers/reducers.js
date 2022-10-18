import { combineReducers } from "redux";

import authReducer from "./authReduver/authReducer";
import appDataReducer from "./appDataReducer/appDataReducer";
import categoriesReducer from "./caregoriesReducer/categoriesReducer";


const redducersContainer = {
    authState: authReducer,
    appDataState: appDataReducer,
    categoriesState: categoriesReducer,
}
const reducers = combineReducers(redducersContainer)

export default reducers