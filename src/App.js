import {useEffect,useState} from "react";
import './App.css';
import TaskForm from './components/TaskForm/TaskForm.js';
import Search from "./components/Search/Search.js";
import Sort from "./components/Sort/Sort.js";
import TableTask from "./components/TableTask/TableTask.js";

function App() {
	const [listTask,setListTask] = useState([]);
	const [isDisplayForm,setDisplayForm] = useState(false);

	useEffect(()=>{
		if(localStorage && localStorage.getItem('listTask'))
		{
			const tasks = JSON.parse(localStorage.getItem('listTask'));
			setListTask(tasks);
		}
	},[])
	const toggleDisplayForm = ()=>
	{
		setDisplayForm(isDisplayForm=>!isDisplayForm);
	}
	const addTask = (task)=>
	{
		const tasks = [...listTask];
		tasks.push(task);
		setListTask(tasks);
		localStorage.setItem("listTask",JSON.stringify(tasks));
	}
	const toggleStatusTask = (id) => {
		const task = listTask.find(task=>task.id === id);
		const index = listTask.indexOf(task);
		const tasks = [
			...listTask.slice(0,index),
			{
				...task,
				status:!task.status,
			},
			...listTask.slice(index + 1)
		];
		setListTask(tasks);
		localStorage.setItem("listTask",JSON.stringify(tasks));
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
						(isDisplayForm)? <TaskForm 
											toggleDisplayForm={toggleDisplayForm} 
											addTask = {addTask}
										/>:""
					}
				</div>
				<div className=
					{
						(isDisplayForm)? "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
						"col-xs-12 col-sm-12 col-md-12 col-lg-12"
					} >
					<button type="button" className="btn btn-primary" 
						onClick={toggleDisplayForm}
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
							<TableTask listTask={listTask} toggleStatusTask={toggleStatusTask}/>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}

export default App;
