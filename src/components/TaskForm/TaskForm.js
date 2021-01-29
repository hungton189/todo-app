import "./TaskForm.css";
import {useState,useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions/index.js";

function TaskForm(props) {
    const {onSaveTask,taskEditing,onCloseForm,updateTaskEditing} = props;
    const [name,setName] = useState("");
    const [status, setStatus] = useState(true);

    useEffect(()=>{
        if(taskEditing.name){
            setName(taskEditing.name);
            setStatus(taskEditing.status);
        }
        else{
            setName("");
            setStatus(true);
        }
    },[taskEditing])

    const onChange = (event) => {
        const {value,name} = event.target;
        if(name === "status") {
            setStatus((value==="true")?true:false);
        }
        else if (name === "name") {
            setName(value);
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(name==="") return;
        const task = {
            id:taskEditing.id,
            name,
            status
        };
        onSaveTask(task);
        onClearForm();
    }
    const onClearForm = ()=>{
        setName("");
        setStatus(true);
    }
    const onClickCloseForm = ()=>{
        updateTaskEditing({});
        onCloseForm();
    }
	return (
        <div className="card">
            <div className="card-header">
                <p>{(taskEditing.name)?"Cập nhật công việc":"Thêm công việc"}</p>
                <div className="close-button" onClick={onClickCloseForm}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className="card-body">
                <form className="form-group" onSubmit={onSubmit}>
                    <label><b>Tên</b></label>
                    <input 
                        className="form-control"
                        name="name"
                        value={name} 
                        onChange={onChange}    
                    />
                    <label className="mt-10"><b>Trạng thái:</b></label>
                    <select 
                        className="form-control" 
                        name="status"
                        value={status}
                        onChange={onChange} 
                        >
                        <option value={true}>Hoạt động</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <div className="buttons ">
                        <button type="Submit" className="btn btn-warning">
                            <i className="fas fa-plus" style={{color:"aliceblue"}}></i>
                            &#160; Lưu lại
                        </button>
                        <button type="button" className="btn btn-danger ml-20" onClick={onClearForm}>
                            <i className="fas fa-times"></i>
                            &#160; Hủy bỏ
                        </button>
                    </div>
                </form>
            </div>
        </div>
	);
}

const mapStateToProps = state => {
    return {
        taskEditing:state.taskEditing
    }
}

const mapDispatchToProps = (dispatch,props) => 
{
    return {
        onSaveTask: (task) => {
            dispatch(actions.onSaveTask(task))
        },
        onCloseForm:()=>{
            dispatch(actions.closeForm())
        },
		updateTaskEditing:(task)=>{
            dispatch(actions.updateTaskEditing(task));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
