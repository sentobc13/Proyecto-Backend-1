  'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        id: 2,
        email: 'jane@example.com',
        nºorder: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        email: 'michael@example.com',
        nºorder: '23456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        email: 'emily@example.com',
        nºorder: '34567',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        email: 'daniel@example.com',
        nºorder: '45678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        email: 'jessica@example.com',
        nºorder: '56789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        email: 'matthew@example.com',
        nºorder: '67890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        email: 'amanda@example.com',
        nºorder: '78901',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        email: 'david@example.com',
        nºorder: '89012',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        email: 'sarah@example.com',
        nºorder: '90123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        email: 'christopher@example.com',
        nºorder: '01234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        email: 'ashley@example.com',
        nºorder: '12341',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        email: 'james@example.com',
        nºorder: '23415',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        email: 'jennifer@example.com',
        nºorder: '34152',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        email: 'robert@example.com',
        nºorder: '41523',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        email: 'william@example.com',
        nºorder: '15234',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ])

  },

  async down (queryInterface, Sequelize) {
  }
};
