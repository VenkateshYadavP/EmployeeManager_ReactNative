import {EMPLOYEE_UPDATE ,
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_CREATE_INITIATE
} from "./types";
import firebase from 'firebase';
import { Actions } from "react-native-router-flux";
export const employeeUpdate = ({prop,value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop,value}
    }
}

export const employeeCreate = ({name,phone,shift}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        console.log(`users/${currentUser.uid}/employees`)
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .push({name,phone,shift})
        .then(() => {
            dispatch({
                type: EMPLOYEE_CREATE_SUCCESS
            })
            Actions.pop()
        });
    }
}

export const employeeFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .on('value',snapshot => {
            dispatch({
                type: EMPLOYEE_FETCH_SUCCESS,
                payload: snapshot.val()
            });
        });
    };
};

export const employeeSave = ({name,phone,shift,uid}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .set({name,phone,shift})
        .then(() => {
            dispatch({
                type: EMPLOYEE_SAVE_SUCCESS
            })
            Actions.pop()
        });
    }
}

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.pop()
        });
    }
}

export const employeeCreateInitiate = () => {
    return ({
        type: EMPLOYEE_CREATE_INITIATE
    });
}

