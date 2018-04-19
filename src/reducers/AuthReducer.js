const INITIAL_VALUE = {email: '',password: '',user: null,error:'', loading: false}
import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_USER
} from "../actions/types";
export default  (state = INITIAL_VALUE, action) => {
    switch(action.type) {
        case EMAIL_CHANGED:
        return {...state, email: action.payload};
        case PASSWORD_CHANGED:
        return {...state, password: action.payload};
        case LOGIN_USER:
        return {...state, loading: true,error: ''};
        case LOGIN_SUCCESS:
        return {...state,...INITIAL_VALUE, user: action.payload};
        case LOGIN_FAILED:
        return {...state, error: 'Authentication Failed!',password: '',loading: false};
        default:
        return state
    }
}