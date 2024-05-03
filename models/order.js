'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.User,{
        through:models.UserOrder,
      })
    }
  }
  Order.init({
    email: DataTypes.STRING,
    nºorder: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};