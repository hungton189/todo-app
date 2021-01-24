import "./TaskForm.css";

function TaskForm() {
	return (
        <div className="card">
            <div className="card-header">
                <p> Thêm công việc </p>
                <div className="close-button">
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label><b>Tên</b></label>
                    <input className="form-control" />
                    <label className="mt-10"><b>Trạng thái:</b></label>
                    <select class="form-control" name="status" >
                        <option value={1}>Kích hoạt</option>
                        <option value={0}>Ẩn</option>
                    </select>
                    <div class="buttons mt-20">
                        <button type="button" class="btn btn-warning">
                            <i class="fas fa-plus"></i>
                            &#160; Lưu lại
                        </button>
                        <button type="button" class="btn btn-danger ml-20">
                            <i class="fas fa-times"></i>
                            &#160; Hủy bỏ
                        </button>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default TaskForm;
