'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Catprods',[
      { ProductId: 1, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Camiseta básica - Mujer
      { ProductId: 2, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Camisa de vestir - Mujer
      { ProductId: 3, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Jeans ajustados - Mujer
      { ProductId: 4, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Chaqueta de cuero - Mujer
      { ProductId: 5, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Sudadera con capucha - Mujer
      { ProductId: 6, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Vestido casual - Mujer
      { ProductId: 7, CategoryId: 2, createdAt: new Date(), updatedAt: new Date() }, // Pantalones deportivos - Deporte
      { ProductId: 8, CategoryId: 4, createdAt: new Date(), updatedAt: new Date() }, // Jersey de lana - Invierno
      { ProductId: 9, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Falda plisada - Mujer
      { ProductId: 10, CategoryId: 4, createdAt: new Date(), updatedAt: new Date() }, // Abrigo largo - Invierno
      { ProductId: 11, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Camiseta estampada - Mujer
      { ProductId: 12, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Blazer - Mujer
      { ProductId: 13, CategoryId: 3, createdAt: new Date(), updatedAt: new Date() }, // Shorts de playa - Verano
      { ProductId: 14, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Top de encaje - Mujer
      { ProductId: 15, CategoryId: 4, createdAt: new Date(), updatedAt: new Date() }, // Parka impermeable - Invierno
      { ProductId: 16, CategoryId: 4, createdAt: new Date(), updatedAt: new Date() }, // Chaleco acolchado - Invierno
      { ProductId: 17, CategoryId: 4, createdAt: new Date(), updatedAt: new Date() }, // Bufanda de lana - Invierno
      { ProductId: 18, CategoryId: 1, createdAt: new Date(), updatedAt: new Date() }, // Pijama de algodón - Mujer
      { ProductId: 19, CategoryId: 2, createdAt: new Date(), updatedAt: new Date() }, // Zapatillas deportivas - Deporte
      { ProductId: 20, CategoryId: 3, createdAt: new Date(), updatedAt: new Date() }, // Sombrero de paja - Verano
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
