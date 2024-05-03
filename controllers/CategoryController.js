const { Category } = require('../models/index');

const CategoryController = {
    async insert(req, res) {
        try {
            const category = await Category.create(req.body);
            res.status(201).send({msg:"Categoría creada con éxito",category})
        } catch (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
        }
    },
};

module.exports = CategoryController;
