import './App.css';
import TaskForm from './components/TaskForm/TaskForm.js';
import Search from "./components/Search/Search.js";
import Sort from "./components/Sort/Sort.js";
import TableTask from "./components/TableTask/TableTask.js";
import {connect} from "react-redux";
import * as actions from "./actions/index";

function App(props) {
	const {isDisplayForm,onToggleForm,taskEditing,updateTaskEditing} = props;
	const onClickButton = () =>{
		if(taskEditing.id){
			updateTaskEditing({});
			return;
		}
		onToggleForm();
	}
	return (
		<div className="container mt-20 mb-50">
			<h2 style={{textAlign: 'center'}}>Quản lý công việc</h2>
			<hr />
			<div className="row mt-20">
				<div className=
					{
						(isDisplayForm)? "col-xs-4 col-sm-4 col-md-4 col-lg-4" :
						"col-xs-0 col-sm-0 col-md-0 col-lg-0"
					}>
					{
						(isDisplayForm)? <TaskForm />:""
					}
				</div>
				<div className=
					{
						(isDisplayForm)? "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
						"col-xs-12 col-sm-12 col-md-12 col-lg-12"
					} >
					<button type="button" className="btn btn-primary"
						onClick={onClickButton} 
					>
						<i className="fas fa-plus"></i>
                        &#160; Thêm công việc
					</button>
					<div className="row mt-10">
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<Search />
						</div>
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<Sort />
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<TableTask />
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}
const mapStateToProps = state => {
	return {
		isDisplayForm:state.isDisplayForm,
		taskEditing:state.taskEditing
	}
}
const mapDispatchToProps = (dispatch,props) => 
{
	return {
		onToggleForm:()=>
		{
			dispatch(actions.toggleForm())
		},
		updateTaskEditing:(task)=>{
            dispatch(actions.updateTaskEditing(task));
        }
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (App);