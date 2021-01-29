import {useEffect,useState} from "react";
import './App.css';
import TaskForm from './components/TaskForm/TaskForm.js';
import Search from "./components/Search/Search.js";
import Sort from "./components/Sort/Sort.js";
import TableTask from "./components/TableTask/TableTask.js";
import {filterData} from "./components/FilterData.js";
import {connect} from "react-redux";
import * as actions from "./actions/index";

function App(props) {
	const [filter,setFilter] = useState({name:"",status:-1});
	const [keyword,setKeyword] = useState("");
	const [sort,setSort] = useState(null);
	const {isDisplayForm,onToggleForm,taskEditing,updateTaskEditing} = props;

	const onFilter = (name,status) =>
	{
		setFilter({name,status});
	}

	const onSearch = (keyword) =>
	{
		setKeyword(keyword);
	}
	const onHandleSort = (sort) =>
	{
		setSort(sort);
	}

	// var tasks = filterData(listTask,filter);
	// tasks = tasks.filter(task =>{
	// 	return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
	// });
	// if(sort) 
	// {
	// 	console.log(sort);
	// 	if(sort.by==="name")
	// 	{
	// 		tasks.sort((a,b)=>
	// 		{
	// 			return (a.name >b.name) ? sort.value : -sort.value;
	// 		})
	// 	}
	// 	else
	// 	{
	// 		tasks.sort((a,b)=>
	// 		{
	// 			return (a.status >b.status) ? -sort.value : sort.value;
	// 		})
	// 	}
	// 	console.log(tasks);
	// }
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
							<Search onSearch={onSearch}/>
						</div>
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<Sort onHandleSort={onHandleSort}/>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<TableTask
									onFilter={onFilter}
							/>
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
