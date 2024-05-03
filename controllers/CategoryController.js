const { Category, Product } = require('../models/index');


const CategoryController = {
    async insert(req, res) {
        try {
            const category = await Category.create(req.body);
            res.status(201).send({ msg: "Categoría creada con éxito", category })
        } catch (err) {
            console.error(err);
            res.status(500).send({ msg: 'Error interno del servidor', err });
        }
    },
    async getAll(req, res) {
        try {
            const categories = await Category.findAll();
            res.send(categories);
        } catch (error) {
            console.error(error);
        }
    },

};

module.exports = CategoryController;
