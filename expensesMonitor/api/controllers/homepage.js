'use strict';
var fs = require('fs');
var path = require('path');
module.exports = 
{
	homepage: homepage,
	material_css: material_css,
	angular_min_js:angular_min_js,
	angular_animate_min_js:angular_animate_min_js,
	angular_aria_min_js:angular_aria_min_js,
	angular_material_js:angular_material_js,
	angular_messages_min_js:angular_messages_min_js
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
	res.contentType('text/css');
	res.send(contents);
}

function angular_min_js(req, res, next) 
{
	let file = path.join(__dirname,"..","..","node_modules","angular","angular.min.js");
	let contents = fs.readFileSync(file, 'utf8');
	res.contentType('text/javascript');
	res.send(contents);
}

function angular_animate_min_js(req, res, next) 
{
	let file = path.join(__dirname,"..","..","node_modules","angular-animate","angular-animate.min.js");
	let contents = fs.readFileSync(file, 'utf8');
	res.contentType('text/javascript');
	res.send(contents);
}


function angular_aria_min_js(req, res, next) 
{
	let file = path.join(__dirname,"..","..","node_modules","angular-aria","angular-aria.min.js");
	let contents = fs.readFileSync(file, 'utf8');
	res.contentType('text/javascript');
	res.send(contents);
}

function angular_material_js(req, res, next) 
{
	let file = path.join(__dirname,"..","..","node_modules","angular-material","angular-material.js");
	let contents = fs.readFileSync(file, 'utf8');
	res.contentType('text/javascript');
	res.send(contents);
}

function angular_messages_min_js(req, res, next) 
{
	let file = path.join(__dirname,"..","..","node_modules","angular-messages","angular-messages.min.js");
	let contents = fs.readFileSync(file, 'utf8');
	res.contentType('text/javascript');
	res.send(contents);
}

