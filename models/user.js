
// User model

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER(11).ZEROFILL,
			primaryKey: true,
			autoIncrement: true
		},

		username: {
			type: DataTypes.STRING(32),
			allowNull: false,
			unique: true
		},

		email: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true
		}
	},

	{
		tableName: "users",
		createdAt: "created_at",
		updatedAt: "updated_at"
	});

	return User;
};