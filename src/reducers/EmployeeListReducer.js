import {EMPLOYEE_FETCH_SUCCESS,
    } from "../actions/types";
    const INITIAL_VALUE = {}
    export default (state = INITIAL_VALUE, action) => {
        switch (action.type ){
            case EMPLOYEE_FETCH_SUCCESS:
                return action.payload;
            default:
                return state;
        }
    }