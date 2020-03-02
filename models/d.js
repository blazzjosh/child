'use strict';
module.exports = (sequelize, DataTypes) => {
  const d = sequelize.define('d', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    parentid: DataTypes.INTEGER
  }, {});
  d.associate = function(models) {
    // associations can be defined here
  };
  return d;
};