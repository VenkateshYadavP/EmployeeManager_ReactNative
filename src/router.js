import React,{Component} from 'react'
import { Scene,Router,Actions } from "react-native-router-flux"
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit';

class RouterComponent extends Component {

    render() {
        return <Router>
                    <Scene key = "root" hideNavBar>
                        <Scene key = "auth">
                            <Scene key = "login" component = {LoginForm} title ="Please Login"/>
                        </Scene>
                        <Scene key = "main">
                            <Scene 
                                onRight = {() => Actions.EmployeeCreate()}
                                rightTitle = "Add"
                                key = "employeeList" 
                                component = {EmployeeList} 
                                title ="Employees"
                                initial
                                >
                            </Scene>
                            <Scene 
                                key = "EmployeeCreate" 
                                component = {EmployeeCreate} 
                                title ="Employee Form">
                            </Scene>
                            <Scene 
                                key = "EmployeeEdit" 
                                component = {EmployeeEdit} 
                                title ="Employee Form">
                            </Scene>
                        </Scene>
                    </Scene>
               </Router>
    }
}
export default RouterComponent;