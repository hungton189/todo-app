import "./TableTask.css";
import TaskItem from "../TaskItem/TaskItem.js";

function TableTask(props) {
    const {listTask,toggleStatusTask,onDeleteTask,onUpdateTask}  = props;
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
                    <input type="text" name="" className="form-control" placeholder="" />
                </td>
                <td>
                    <select name="" id="" className="form-control" >
                        <option>Tất cả</option>
                        <option>Ẩn</option>
                        <option>Hoạt động</option>
                    </select>
                </td>
                <td></td>
            </tr>
            {elementTasks}
        </table>
	);
}

export default TableTask;
