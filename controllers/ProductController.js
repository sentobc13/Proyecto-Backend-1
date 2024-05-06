const { Product, Category, Sequelize } = require('../models/index.js');
const { Op } = Sequelize

const ProductController = {
    create: async (req, res) => {
        try {
            const product = await Product.create(req.body);
            res.status(201).send({ msg: 'Producto creado con éxito', product });
        } catch (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
        }
    },
    async update(req, res) {
        try {
          await Product.update(req.body,
            {
              where: {
                id: req.params.id,
              },
            }
          );
          res.send("Producto actualizado con éxito");
        } catch (err) {
          console.error(err);
          res.status(500).send({ msg: 'Error interno del servidor', err });
        }
      },
      async delete(req, res) {
        try {
            await Product.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send({ msg: 'El producto ha sido eliminado'})
        }
         catch (error) {
            console.error(err);
            res.status(500).send({ msg: 'Error interno del servidor', err });
        }
    },
    async getAll(req, res) {
        try {
          
          const products = await Product.findAll({
            include:[{ model: Category,attributes:["name"], through: { attributes: [] } }]
          });
          res.send(products);
        } catch (error) {
          console.error(error);
          res.status(500).send({ msg: 'Error interno del servidor', err });
        }
      },
      async getById(req,res) {
        try {
          const product = await Product.findByPk(req.params.id)
          res.send({msg:'Producto encontrado por su id', product})
        } catch (error) {
          console.error(error);
          res.status(500).send({ msg: 'Error interno del servidor', err });
        }
      },
      async getByName(req, res) {
        try {
            const products = await Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                },
                include: [{ model: Category,attributes:["name"], through: { attributes: [] } }]
            });
            res.send(products);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error interno del servidor');
        }
    }
};

module.exports = ProductController;

