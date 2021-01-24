import './App.css';
import TaskForm from './components/TaskForm/TaskForm.js';

function App() {
	return (
		<div className="container mt-20">
			<h2 style={{textAlign: 'center'}}>Quản lý công việc</h2>
			<div className="row mt-20">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
					<TaskForm />
				</div>
			</div>
		</div>
		
	);
}

export default App;
