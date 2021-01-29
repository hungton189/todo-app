import "./TaskItem.css";
import {connect} from "react-redux";
import * as actions from "../../actions/index";

function TaskItem(props) {
    const {task,index,toggleStatusTask,onDeleteTask,onUpdateTask} = props;
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
                        onClick={()=>toggleStatusTask(task.id)}
                    >
                        Ẩn
                    </span>:
                    <span 
                        className="task-item-status" 
                        style={{backgroundColor: "rgb(38, 129, 204)"}}
                        onClick={()=>toggleStatusTask(task.id)}
                    >
                        Hoạt động
                    </span>
                }    
            </td>
            <td style={{textAlign: 'center'}}>
                <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={()=>onUpdateTask(task.id)}
                >
                    <i className="fas fa-pen" style={{color:"aliceblue"}}></i>
                    &#160;Sửa
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger ml-10"
                    onClick={()=>onDeleteTask(task.id)}
                >
                    <i className="fas fa-trash"></i>
                    &#160;Xóa
                </button>
            </td>
        </tr>
	);
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        toggleStatusTask:(id)=>{
            dispatch(actions.toggleStatusTask(id));
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
