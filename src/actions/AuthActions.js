import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_USER
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
}

export const loginUser = (email,password) => {
    return (dispatch) => {
            dispatch({type:LOGIN_USER})
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user => loginUserSuccess(dispatch,user))
            .catch(
                () => firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user => loginUserSuccess(dispatch,user))
                .catch(() => loginUserFailed(dispatch))
            );
        };
}

const loginUserSuccess = (dispatch,user) => {
    dispatch({type:LOGIN_SUCCESS,payload:user})
    Actions.main();
}

const loginUserFailed = (dispatch) => {
    dispatch({type:LOGIN_FAILED})
}