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
	tasks = tasks.filter(task =>{
		return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1
    });
    return tasks;
}