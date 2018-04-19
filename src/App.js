import React,{Component} from "react";
import {
    View,
    Text
} from 'react-native';
import LoginForm from "./components/LoginForm";
import firebase from "firebase";
import {Provider} from 'react-redux';
import { createStore,applyMiddleware } from "redux";
import reducers from './reducers'
import ReduxThunk from "redux-thunk";
import Router from "./router";
class App extends Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyDO2cqO6r4Bc7jHQ7BuPQdEogNPi7sAVkk",
            authDomain: "manager-2ee67.firebaseapp.com",
            databaseURL: "https://manager-2ee67.firebaseio.com",
            projectId: "manager-2ee67",
            storageBucket: "",
            messagingSenderId: "147164184174"
          };
          firebase.initializeApp(config);
    }
    render() {
        return(
            <Provider store = {createStore(reducers,applyMiddleware(ReduxThunk))}>
                    <Router/>
            </Provider>
        );
    }
}

export default  App;