module.exports.filterData = (listTask,filter) =>
{
    var tasks = listTask;
	if(filter.status === 0)
	{
		tasks = listTask.filter(task=>task.status===false);
	}
	else if(filter.status === 1)
	{
		tasks = listTask.filter(task=>task.status===true);
	}
	if(filter.name){
		tasks = tasks.filter(task =>{
			return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
		});
	}
    return tasks;
}
module.exports.sortTask = (listTask,keySort)=>{
	if(keySort.by==="name"){
		listTask.sort((a,b)=>{
			return (a.name >b.name) ? keySort.value : -keySort.value;
	})
	} else if(keySort.by==="status") {
		listTask.sort((a,b)=>{
			return (a.status >b.status) ? -keySort.value : keySort.value;
	})
	}
	return listTask;
}