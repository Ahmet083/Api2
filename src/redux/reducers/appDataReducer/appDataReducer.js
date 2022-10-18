import { createStore } from "redux"



export const SET_APP_DATA = 'set_app_data'
export const REMOVE_APP_DATA = 'remove_app_data'
export



const initialState = {
    appData: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_APP_DATA:
            return {
            ...state,
        appData: action.payload.appData,
    }
    default:
        return state
    }
}

export default createStore(reducer)