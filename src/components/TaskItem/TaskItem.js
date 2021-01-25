import "./TaskItem.css";

function TaskItem() {
	return (
        <tr>
            <td>1</td>
            <td>Học lập trình ReactJs</td>
            <td style={{textAlign: 'center'}}>
                <span className="task-item-status">Ẩn</span>
            </td>
            <td style={{textAlign: 'center'}}>
                <button type="button" class="btn btn-warning">
                    <i class="fas fa-pen" style={{color:"aliceblue"}}></i>
                    &#160;Sửa
                </button>
                <button type="button" class="btn btn-danger ml-10">
                    <i class="fas fa-trash"></i>
                    &#160;Xóa
                </button>
            </td>
        </tr>
	);
}

export default TaskItem;
