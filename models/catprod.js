'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CatProd extends Model {

    static associate(models) {
      
    }
  }
  CatProd.init({
    CategoryId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CatProd',
  });
  return CatProd;
};