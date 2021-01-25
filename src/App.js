import {useEffect,useState} from "react";
import './App.css';
import TaskForm from './components/TaskForm/TaskForm.js';
import Search from "./components/Search/Search.js";
import Sort from "./components/Sort/Sort.js";
import TableTask from "./components/TableTask/TableTask.js";

function App() {
	const [listTasks,setListTasks] = useState([]);


	const random = ()=>
	{
		return Math.floor(1+Math.random() * 0x10000).toString(16).substring(1);
	}
	const generateId = ()=>
	{
		return random()+"-"+random()+""+random()+random()+random()+"-"+random()+random();
	}

	useEffect(()=>{
		if(localStorage && localStorage.getItem('listTask'))
		{
			const tasks = JSON.parse(localStorage.getItem('listTask'));
			setListTasks(tasks);
		}
	},[])
	// console.log(listTasks);
	return (
		<div className="container mt-20 mb-50">
			<h2 style={{textAlign: 'center'}}>Quản lý công việc</h2>
			<hr />
			<div className="row mt-20">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<TaskForm />
				</div>
				<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8" >
					<button type="button" class="btn btn-primary" >
						<i class="fas fa-plus"></i>
                        &#160; Thêm công việc
					</button>
					<div class="row mt-10">
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<Search />
						</div>
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<Sort />
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<TableTask listTasks={listTasks}/>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	);
}

export default App;
