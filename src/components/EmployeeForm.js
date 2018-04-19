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
import { employeeUpdate } from "../actions";
import { connect } from "react-redux";
class EmployeeForm extends Component {
    render() {
        return(
           <View>
            <CardSection>
                <Input
                    label = "Name"
                    placeholder = "john"
                    onChangeText = {text => this.props.employeeUpdate({prop:'name',value: text})}
                    value = {this.props.name}
                />
            </CardSection>
            <CardSection>
                <Input
                    label = "Mobile"
                    placeholder = "5555555555"
                    onChangeText = {text => this.props.employeeUpdate({prop:'phone',value: text})}
                    value = {this.props.phone}
                />
            </CardSection>
            <CardSection style = {{flexDirection: 'column'}}>
                <Text style = {{paddingLeft: 20, fontSize: 18}}>
                    Shift
                </Text>
               <Picker 
               selectedValue = {this.props.shift}
               onValueChange = {value => this.props.employeeUpdate({prop:'shift',value: value})}>
                <Picker.Item label = "Monday" value = "monday"/>
                <Picker.Item label = "Tuesday" value = "Tuesday"/>
                <Picker.Item label = "Wednesday" value = "wednesday"/>
                <Picker.Item label = "Thursday" value = "thursday"/>
                <Picker.Item label = "Friday" value = "friday"/>
                <Picker.Item label = "Saturday" value = "saturday"/>
                <Picker.Item label = "Sunday" value = "sunday"/>
               </Picker>
            </CardSection>
           </View>
        );
    }
}
const makePropFromState = (state) => {
    const {name,phone,shift} = state.employeeForm
    console.log(state)
    return {name,phone,shift}
}
export default  connect(makePropFromState, {employeeUpdate})(EmployeeForm);