import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import EmployeeUpdateReducer from "./EmployeeUpdateReducer";
import EmployeeListReducer from "./EmployeeListReducer";
export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeUpdateReducer,
    employees: EmployeeListReducer
});