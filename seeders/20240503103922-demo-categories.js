'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        "id": 1,
        "name": "Mujer",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 2,
        "name": "Deporte",
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        "id": 3,
        "name": "Verano",
        createdAt: new Date(),
        updatedAt: new Date()
      },  
      {
        "id": 4,
        "name": "Invierno",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ])

  },

  async down(queryInterface, Sequelize) {
  }
};

