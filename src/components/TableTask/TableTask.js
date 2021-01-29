import "./TableTask.css";
import {useState} from "react";
import TaskItem from "../TaskItem/TaskItem.js";
import {connect} from "react-redux";

function TableTask(props) {
    const [filterName, setFilterName] = useState("");
    const [filterStatus, setFilterStatus] = useState(-1);
    const {listTask,toggleStatusTask,onDeleteTask,onUpdateTask,onFilter}  = props;
    const onChange = (event) =>
    {
        const {name,value} = event.target;
        if(name ==="filterName")
        {
            onFilter(value,filterStatus);
            setFilterName(value);
        }
        else
        {
            onFilter(filterName,value);
            setFilterStatus(value);
        }
    }
    const elementTasks =  listTask.map((task,index) => {
        return <TaskItem 
                    task={task} 
                    index={index} 
                    key={task.id} 
                    toggleStatusTask={toggleStatusTask}
                    onDeleteTask={onDeleteTask}
                    onUpdateTask={onUpdateTask}
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
                        value = {filterName}
                        onChange={onChange}
                    />
                </td>
                <td>
                    <select 
                        name = "filterStatus" 
                        className = "form-control"
                        value = {filterStatus}
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
        listTask: state.tasks
    }
}

export default connect(mapStateToProps,null)(TableTask);
