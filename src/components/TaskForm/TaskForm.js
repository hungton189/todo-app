import "./TaskForm.css";

function TaskForm(props) {
    const {toggleDisplayForm} = props;
	return (
        <div className="card">
            <div className="card-header">
                <p> Thêm công việc </p>
                <div className="close-button" onClick={toggleDisplayForm}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label><b>Tên</b></label>
                    <input className="form-control" />
                    <label className="mt-10"><b>Trạng thái:</b></label>
                    <select className="form-control" name="status" >
                        <option value={1}>Hoạt động</option>
                        <option value={0}>Ẩn</option>
                    </select>
                    <div className="buttons ">
                        <button type="button" className="btn btn-warning">
                            <i className="fas fa-plus" style={{color:"aliceblue"}}></i>
                            &#160; Lưu lại
                        </button>
                        <button type="button" className="btn btn-danger ml-20">
                            <i className="fas fa-times"></i>
                            &#160; Hủy bỏ
                        </button>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default TaskForm;
