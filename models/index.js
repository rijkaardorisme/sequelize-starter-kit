
// Add Sequelize models to the project
// http://sequelizejs.com/articles/express

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var lodash = require('lodash');
var config = require('../config');
var db = {};

DATABASE = config.mysql_database;
PORT = config.mysql_port;
USERNAME = config.mysql_user;
PASSWORD = config.mysql_password;
DIALECT = config.dialect;

var sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
	dialect: DIALECT,
	port: PORT
});

fs
.readdirSync(__dirname)
.filter(function (file) {
	return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach(function (file) {
	var model = sequelize.import(path.join(__dirname, file));
	db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
	if (db[modelName].options.hasOwnProperty('associate')) {
		db[modelName].options.associate(db);
	}
});

module.exports = lodash.extend(
{
	sequelize	: sequelize,
	Sequelize	: sequelize
}, db);