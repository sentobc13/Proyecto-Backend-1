'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        "id": 1,
        "name": "Camiseta básica",
        "price": 12.99,
        "size": "S",
        "description": "Camiseta de algodón básica en varios colores.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 2,
        "name": "Camisa de vestir",
        "price": 29.99,
        "size": "M",
        "description": "Camisa elegante de vestir, perfecta para ocasiones formales.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
     {
        "id": 3,
        "name": "Jeans ajustados",
        "price": 39.99,
        "size": "L",
        "description": "Jeans ajustados de denim de alta calidad, estilo moderno.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 4,
        "name": "Chaqueta de cuero",
        "price": 79.99,
        "size": "L",
        "description": "Chaqueta de cuero genuino, resistente y con estilo atemporal.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 5,
        "name": "Sudadera con capucha",
        "price": 24.99,
        "size": "M",
        "description": "Sudadera cómoda con capucha y bolsillo canguro, perfecta para el tiempo libre.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 6,
        "name": "Vestido casual",
        "price": 34.99,
        "size": "S",
        "description": "Vestido casual y versátil, ideal para diferentes ocasiones.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 7,
        "name": "Pantalones deportivos",
        "price": 19.99,
        "size": "L",
        "description": "Pantalones deportivos cómodos y transpirables, ideales para hacer ejercicio.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 8,
        "name": "Jersey de lana",
        "price": 29.99,
        "size": "M",
        "description": "Jersey de lana suave y cálido, perfecto para los días fríos de invierno.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 9,
        "name": "Falda plisada",
        "price": 22.99,
        "size": "S",
        "description": "Falda plisada elegante y femenina, ideal para looks formales o informales.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 10,
        "name": "Abrigo largo",
        "price": 59.99,
        "size": "L",
        "description": "Abrigo largo y elegante, perfecto para mantenerse abrigado en invierno.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 11,
        "name": "Camiseta estampada",
        "price": 14.99,
        "size": "M",
        "description": "Camiseta de algodón con estampado moderno y llamativo.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 12,
        "name": "Blazer",
        "price": 49.99,
        "size": "L",
        "description": "Blazer elegante y versátil, ideal para looks de oficina o eventos formales.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 13,
        "name": "Shorts de playa",
        "price": 17.99,
        "size": "M",
        "description": "Shorts de playa cómodos y ligeros, perfectos para días soleados junto al mar.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 14,
        "name": "Top de encaje",
        "price": 16.99,
        "size": "S",
        "description": "Top de encaje elegante y femenino, ideal para looks de noche.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 15,
        "name": "Parka impermeable",
        "price": 44.99,
        "size": "L",
        "description": "Parka impermeable y resistente al viento, perfecta para días lluviosos.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 16,
        "name": "Chaleco acolchado",
        "price": 34.99,
        "size": "M",
        "description": "Chaleco acolchado ligero y cálido, ideal para entretiempo.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 17,
        "name": "Bufanda de lana",
        "price": 9.99,
        "size": "M",
        "description": "Bufanda de lana suave y cálida, perfecta para combinar con abrigos de invierno.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 18,
        "name": "Pijama de algodón",
        "price": 27.99,
        "size": "S",
        "description": "Pijama de algodón cómodo y suave, ideal para dormir plácidamente.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 19,
        "name": "Zapatillas deportivas",
        "price": 49.99,
        "size": "L",
        "description": "Zapatillas deportivas cómodas y resistentes, ideales para correr y hacer ejercicio.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 20,
        "name": "Sombrero de paja",
        "price": 11.99,
        "size": "S",
        "description": "Sombrero de paja ligero y fresco, perfecto para protegerse del sol en verano.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])

  },

  async down(queryInterface, Sequelize) {
  }
};

