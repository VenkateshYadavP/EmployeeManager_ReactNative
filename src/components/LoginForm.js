import React,{Component} from "react";
import {
    View,
    Text
} from 'react-native';
import { 
    Button,
    Input,
    CardSection,
    Card,
    Spinner
} from "./common";
import {emailChanged,passwordChanged,loginUser} from "../actions";
import {connect} from "react-redux";

class LoginForm extends Component {
    onChangeEmail(text) {
        this.props.emailChanged(text)
    }
    onChangePassword(text) {
        this.props.passwordChanged(text)
    }
    
    onLoginClicked() {
        const {email,password} = this.props
        this.props.loginUser(email,password)
    }
    
    renderError() {
        if (this.props.error) {
            return <Text style = {Styles.errorMessage}>
            {this.props.error}
            </Text>
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large'/>
        } else {
            return <Button onPress = {this.onLoginClicked.bind(this)}>
            Log In
            </Button>
        }
    }
    
    render() {
        console.log(this.props)
        return(
            <Card>
            <CardSection>
            <Input
            label = 'Email'
            placeholder = 'user@gmail.com'
            value = {this.props.email}
            onChangeText = {this.onChangeEmail.bind(this)}
            />
            </CardSection>
            <CardSection>
            <Input
            secureTextEntry
            label = 'Password'
            placeholder = 'Password'
            value = {this.props.password}
            onChangeText = {this.onChangePassword.bind(this)}
            />
            </CardSection>
            {this.renderError()}
            <CardSection>
            {this.renderButton()}
            </CardSection>
            </Card>
        );
    }
}

const Styles =  {
    errorMessage: {
        fontSize: 18,
        color: 'red',
        alignSelf:'stretch',
        textAlign:'center',
        backgroundColor: 'white'
    }
}
const makePropsFromState = (state) => {
    console.log(state.auth)
    return {email: state.auth.email, password: state.auth.password,user: state.auth.user,error: state.auth.error,loading: state.auth.loading}
}
export default  connect(makePropsFromState,{emailChanged,passwordChanged,loginUser})(LoginForm);