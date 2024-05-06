const { Category } = require('../models/index');


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
        } catch (err) {
            console.error(err);
        }
    },
    async update(req, res) {
        try {
          await Category.update(req.body,
            {
              where: {
                id: req.params.id,
              },
            }
          );
          res.send("Categoria actualizada con éxito");
        } catch (err) {
          console.error(err);
          res.status(500).send({ msg: 'Error interno del servidor', err });
        }
      },
    async delete(req, res) {
        try {
            await Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send({ message: 'La categoría se ha eliminado'})
        }
         catch (error) {
            console.error(err);
            res.status(500).send({ msg: 'Error interno del servidor', err });
        }
    }
}

module.exports = CategoryController;
