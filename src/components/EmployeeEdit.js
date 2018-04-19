import React,{Component} from "react";
import {
    View,
    Text,
    Picker
} from 'react-native';
import {
    Card,
    CardSection,
    Button,
    Input,
    Confirm
} from './common';
import _ from "lodash";
import { employeeUpdate, employeeSave, employeeDelete } from "../actions";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import  communications from "react-native-communications";
class EmployeeEdit extends Component {
    state = {showModal: false}
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
          });
    }
    onButtonPress() {
        console.log(this.props);
       const {name,phone,shift} = this.props;
       const uid = this.props.employee.uid
       this.props.employeeSave({name,phone,shift, uid});
    }
    onTextPressed() {
       const {phone,shift} = this.props;
       communications.text(phone,`your shift is on ${shift}`);
    }

    onFireEmployee() {
        this.setState({showModal: !this.state.showModal})
     }
    onAccept() {
        this.setState({showModal: false})
        this.props.employeeDelete({uid: this.props.employee.uid})
    }

    onReject() {
        this.setState({showModal: false})
    }
    render() {
        return(
           <Card>
             <EmployeeForm {...this.props}/>
            <CardSection>
                <Button onPress = {this.onButtonPress.bind(this)}>
                    Save Changes
                </Button>
            </CardSection>
            <CardSection>
                <Button onPress = {this.onTextPressed.bind(this)}>
                    Text Employee
                </Button>
            </CardSection>
            <CardSection>
                <Button onPress = {this.onFireEmployee.bind(this)}>
                    Fire Employee
                </Button>
            </CardSection>
            <Confirm visible = {this.state.showModal} onAccept = {this.onAccept.bind(this)} onReject = {this.onReject.bind(this)} >
                Are you sure you want fire?
            </Confirm>
           </Card>
        );
    }
}

const makePropFromState = (state) => {
    const {name,phone,shift} = state.employeeForm
    return {name,phone,shift}
}

export default  connect(makePropFromState, {employeeUpdate,employeeSave,employeeDelete})(EmployeeEdit);