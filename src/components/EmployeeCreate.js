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
    Input
} from './common';
import { employeeCreateInitiate, employeeUpdate,employeeCreate } from "../actions";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
class EmployeeCreate extends Component {
    componentWillMount() {
        this.props.employeeCreateInitiate()
    }
    onButtonPress() {
        const {name,phone,shift} = this.props
        this.props.employeeCreate({name,phone,shift: shift || 'Monday'})
    }
    render() {
        return(
           <Card>
             <EmployeeForm {...this.props}/>
            <CardSection>
                <Button onPress = {this.onButtonPress.bind(this)}>
                    Create
                </Button>
            </CardSection>
           </Card>
        );
    }
}
const makePropFromState = (state) => {
    const {name,phone,shift} = state.employeeForm
    return {name,phone,shift}
}
export default  connect(makePropFromState, {employeeUpdate, employeeCreate, employeeCreateInitiate})(EmployeeCreate);