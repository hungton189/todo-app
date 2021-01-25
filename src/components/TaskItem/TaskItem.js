import "./TaskItem.css";

function TaskItem(props) {
    const {task,index} = props;
	return (
        <tr>
            <td>{index + 1}</td>
            <td>{task.name}</td>
            <td style={{textAlign: 'center'}}>
                {   
                    (!task.status)?
                    <span 
                        className="task-item-status" 
                        style={{backgroundColor: "red"}}
                    >
                        Ẩn
                    </span>:
                    <span 
                        className="task-item-status" 
                        style={{backgroundColor: "rgb(38, 129, 204)"}}
                    >
                        Hoạt động
                    </span>
                }    
            </td>
            <td style={{textAlign: 'center'}}>
                <button type="button" className="btn btn-warning">
                    <i className="fas fa-pen" style={{color:"aliceblue"}}></i>
                    &#160;Sửa
                </button>
                <button type="button" className="btn btn-danger ml-10">
                    <i className="fas fa-trash"></i>
                    &#160;Xóa
                </button>
            </td>
        </tr>
	);
}

export default TaskItem;
