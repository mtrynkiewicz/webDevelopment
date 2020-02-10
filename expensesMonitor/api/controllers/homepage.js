'use strict';
var fs = require('fs');
var path = require('path');
module.exports = 
{
	homepage: homepage,
	material_css: material_css
};

function homepage(req, res, next) 
{
	let file = path.join(__dirname,"..","..","html","homepage.html");
	let contents = fs.readFileSync(file, 'utf8');
	res.send(contents);
}

function material_css(req, res, next) 
{
	let file = path.join(__dirname,"..","..","node_modules","angular-material","angular-material.min.css");

	let contents = fs.readFileSync(file, 'utf8');
	res.send(contents);
}