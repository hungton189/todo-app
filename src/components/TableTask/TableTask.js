import "./TableTask.css";
import TaskItem from "../TaskItem/TaskItem.js";
import {connect} from "react-redux";
import * as actions from "../../actions/index";
import {filterData} from "./FilterData";

function TableTask(props) {
    const {listTask,filterTask,onFilter}  = props;
    const onChange = (event) =>
    {
        const {value} = event.target;
        const {name,status} = filterTask;
        if(event.target.name==="filterName"){
            onFilter({name:value,status});
        } else if(event.target.name==="filterStatus"){
            onFilter({name,status:parseInt(value)});
        }
    }
    const tasks = filterData(listTask,filterTask);
    const elementTasks =  tasks.map((task,index) => {
        return <TaskItem 
                    task={task} 
                    index={index} 
                    key={task.id} 
                />
    })
	return (
        <table className="table-task" border="1">
            <tr>
                <th style={{width:"10%"}}>STT</th>
                <th style={{width:"40%"}}>Tên</th>
                <th style={{width:"20%"}}>Trạng thái</th>
                <th style={{width:"30%"}}>Hành động</th>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input 
                        type = "text" 
                        name = "filterName" 
                        className = "form-control"
                        value = {filterTask.name}
                        onChange={onChange}
                    />
                </td>
                <td>
                    <select 
                        name = "filterStatus" 
                        className = "form-control"
                        value = {filterTask.status}
                        onChange = {onChange}
                    >
                        <option value = {-1}>Tất cả</option>
                        <option value = {0}>Ẩn</option>
                        <option value = {1}>Hoạt động</option>
                    </select>
                </td>
                <td></td>
            </tr>
            {elementTasks}
        </table>
	);
}

const mapStateToProps = (state) => {
    return {
        listTask: state.tasks,
        filterTask:state.filterTask
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFilter:(filter) => {
            dispatch(actions.filterTask(filter))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TableTask);
