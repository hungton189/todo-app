import "./TaskForm.css";
import {useState,useEffect} from "react";
import {generateId} from "../generateID";
import {connect} from "react-redux";
import * as actions from "../../actions/index.js";

function TaskForm(props) {
    const {onAddTask,taskUpdate,onHandleUpdateTask,closeForm} = props;
    const [name,setName] = useState("");
    const [status, setStatus] = useState(true);

    useEffect(()=>{
        if(taskUpdate){
            setName(taskUpdate.name);
            setStatus(taskUpdate.status);
        }
        else
        {
            setName("");
            setStatus(true);
        }
    },[taskUpdate])

    const onChange = (event) => 
    {
        const {value,name} = event.target;
        if(name === "status")
        {
            setStatus((value==="true")?true:false);
        }
        else if (name === "name")
        {
            setName(value);
        }
    }
    const onSubmit = (event) => 
    {
        event.preventDefault();
        if(name==="") return;
        const task = {
            id:generateId(),
            name,
            status
        };
        if(!taskUpdate)
        {
            onAddTask(task);
        }
        else
        {
            onHandleUpdateTask(task);
        }
        onReset();
    }
    const onReset = ()=>
    {
        setName("");
        setStatus(true);
    }
	return (
        <div className="card">
            <div className="card-header">
                <p>{(taskUpdate)?"Cập nhật công việc":"Thêm công việc"}</p>
                <div className="close-button" onClick={closeForm}>
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
                        <button type="button" className="btn btn-danger ml-20" onClick={onReset}>
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

    }
}

const mapDispatchToProps = (dispatch,props) => 
{
    return {
        onAddTask: (task) => {
            dispatch(actions.addTask(task))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
