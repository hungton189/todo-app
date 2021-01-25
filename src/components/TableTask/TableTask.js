import "./TableTask.css";
import TaskItem from "../TaskItem/TaskItem.js";

function TableTask() {
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
                        <option>Kích hoạt</option>
                    </select>
                </td>
                <td></td>
            </tr>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </table>
	);
}

export default TableTask;
