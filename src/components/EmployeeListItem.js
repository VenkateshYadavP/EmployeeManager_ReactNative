import React,{Component} from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import {
    CardSection
} from './common';
import { Actions } from "react-native-router-flux";
class EmployeeListItem extends Component {
    onRowPress() {
        console.log("onPresssedd")
        Actions.EmployeeEdit({employee: this.props.employee});
    }
    render() {
        return(
            <TouchableWithoutFeedback onPress = {this.onRowPress.bind(this)}>
            <View>
            <CardSection>
             <Text style = {Styles.textStyle}>
                 {this.props.employee.name}
             </Text>
            </CardSection>
            </View>
            </TouchableWithoutFeedback>
         )
    };
} 

const Styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 16
    }
}
export default  EmployeeListItem;