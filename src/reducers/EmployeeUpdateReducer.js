import {EMPLOYEE_UPDATE,
EMPLOYEE_CREATE_SUCCESS,
EMPLOYEE_SAVE_SUCCESS,
EMPLOYEE_CREATE_INITIATE
} from "../actions/types";
const INITIAL_VALUE = {
    name:'',
    phone: '',
    shift: ''
}
export default (state = INITIAL_VALUE, action) => {
    switch (action.type ){
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value}
        case EMPLOYEE_CREATE_SUCCESS:
            return INITIAL_VALUE
        case EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_CREATE_INITIATE:
            return INITIAL_VALUE

        default:
            return state;
    }
}