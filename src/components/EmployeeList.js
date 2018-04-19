import React,{Component} from "react";
import {
    View,
    Text,
    FlatList
} from 'react-native';
import { connect } from "react-redux";
import { employeeFetch } from "../actions/EmployeeUpdateActions";
import _ from 'lodash';
import EmployeeListItem from "./EmployeeListItem";
class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeeFetch()
    }
    _keyExtractor = (item, index) => item.uid.toString();
    _renderItem = ({item}) => {    
        return <EmployeeListItem  employee = {item}/>
    }
    render() {
        console.log(this.props.employees)
        return(
           <FlatList
                data = {this.props.employees}
                keyExtractor = {this._keyExtractor}
                renderItem = {this._renderItem}
           />
        );
    }
}

const makePropsFromState= state => {
    const employees = _.map(state.employees,(val,uid)=> {
        return {...val, uid}
    });
    console.log({employees})
    return {employees}
}
export default  connect(makePropsFromState,{employeeFetch})(EmployeeList);