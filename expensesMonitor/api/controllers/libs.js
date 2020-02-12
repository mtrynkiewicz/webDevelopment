'use strict';
var fs = require('fs');
var path = require('path');

module.exports = 
{
	fileserve: fileserve
};

function fileserve(req, res, next)
{
	let folder = req.swagger.params.folder.value;
	let name = req.swagger.params.name.value;
	let file = path.join(__dirname,"..","..","node_modules",folder,name);
	let contents = fs.readFileSync(file, 'utf8');
	res.send(contents);
}
