'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Michael Johnson',
        email: 'michael@example.com',
        password: 'password789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Emily Brown',
        email: 'emily@example.com',
        password: 'password012',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Daniel Wilson',
        email: 'daniel@example.com',
        password: 'password345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Jessica Taylor',
        email: 'jessica@example.com',
        password: 'password678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Matthew Martinez',
        email: 'matthew@example.com',
        password: 'password901',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Amanda Harris',
        email: 'amanda@example.com',
        password: 'password234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'David Anderson',
        email: 'david@example.com',
        password: 'password567',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Sarah Walker',
        email: 'sarah@example.com',
        password: 'password890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Christopher Moore',
        email: 'christopher@example.com',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Ashley Jackson',
        email: 'ashley@example.com',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'James White',
        email: 'james@example.com',
        password: 'password789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Jennifer Lopez',
        email: 'jennifer@example.com',
        password: 'password012',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: 'Robert Lee',
        email: 'robert@example.com',
        password: 'password345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
