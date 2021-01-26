import "./TaskForm.css";
import {useState} from "react";
import {generateId} from "../generateID";

function TaskForm(props) {
    const [name,setName] = useState("");
    const [status, setStatus] = useState(true);
    const {toggleDisplayForm, addTask} = props;

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
        addTask(task);
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
                <p> Thêm công việc </p>
                <div className="close-button" onClick={toggleDisplayForm}>
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

export default TaskForm;
