const { Category, Product, Sequelize } = require('../models/index');
const { Op } = Sequelize

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
    },
    async getById(req,res) {
      try {
        const category = await Category.findByPk(req.params.id)
        res.send({msg:'Categoría encontrada por su id', category})
      } catch (error) {
        console.error(error);
        res.status(500).send({ msg: 'Error interno del servidor', err });
      }
    },
    async getByName(req, res) {
      try {
          const categories = await Category.findAll({
              where: {
                  name: {
                      [Op.like]: `%${req.params.name}%`
                  }
              },
              include: [{ model: Product,attributes:["name"], through: { attributes: [] } }]
          });
          res.send(categories);
      } catch (error) {
          console.error(error);
          res.status(500).send('Error interno del servidor');
      }
  },
}

module.exports = CategoryController;
