//var Sequelize = require('sequelize');

//user model created using sequelize
//talks to the table user

module.exports = function(sequelize, DataTypes){
	var User = sequelize.define('user', {
		username: DataTypes.STRING,
		passwordhash: DataTypes.STRING
	});
		return User;
};

//Above is what is known as an ojbect factory