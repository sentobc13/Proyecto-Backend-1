'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserOrder extends Model {
 
    static associate(models) {
    }
  }
  UserOrder.init({
    UserId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserOrder',
  });
  return UserOrder;
};