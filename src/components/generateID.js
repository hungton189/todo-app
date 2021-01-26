const random = ()=>
{
	return Math.floor(1+Math.random() * 0x10000).toString(16).substring(1);
}
module.exports.generateId = ()=>
{
    return random()+"-"+random()+""+random()+random()+random()+"-"+random()+random();
}

