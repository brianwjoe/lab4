/*
controller code for project requests.
 */

exports.viewProject = function(req, res){
	var name = req.params.name;
	console.log("the project name is: " + name);
	res.render('project', {
		'projectName':name

	});


}

